'use server';

import { headers } from 'next/headers';
import React from 'react';
import { Resend } from 'resend';

import ContactFormEmail from '@/common/components/sections/contact/_components/contact-form-email';
import { getErrorMessage, validateString } from '@/common/lib/utils';

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_MESSAGES = 3;

// In-memory, per-instance limit. Enough for a single container; it resets on restart.
const recentSends = new Map<string, number[]>();

const isRateLimited = (key: string) => {
  const now = Date.now();
  const timestamps = (recentSends.get(key) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  );

  if (timestamps.length >= RATE_LIMIT_MAX_MESSAGES) {
    recentSends.set(key, timestamps);
    return true;
  }

  recentSends.set(key, [...timestamps, now]);
  return false;
};

const getClientIp = () => {
  const headerList = headers();
  return (
    headerList.get('x-forwarded-for')?.split(',')[0].trim() ??
    headerList.get('x-real-ip') ??
    'unknown'
  );
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');
  const honeypot = formData.get('website');

  // Bots fill every field; people never see this one. Pretend it worked.
  if (honeypot) {
    return { data: null };
  }

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  if (isRateLimited(getClientIp())) {
    return {
      error: 'Too many messages. Please try again later or email me directly.',
    };
  }

  let data;
  try {
    if (!process.env.RESEND_API_KEY) {
      return { error: 'Email service is not configured' };
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: [process.env.CONTACT_TO_EMAIL || 'emcc1990@gmail.com'],
      subject: 'Message from contact form | PORTFOLIO',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
