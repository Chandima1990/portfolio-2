'use client';

import { motion } from 'framer-motion';
import React from 'react';
import toast from 'react-hot-toast';

import SectionHeading from '@/common/components/shared/section-heading';
import { useSectionInView } from '@/common/lib/hooks';
import { sendEmail } from '@/common/utils/actions/send-email';

import SubmitBtn from './_components/submit-btn';

export default function Contact() {
  const { ref } = useSectionInView('contact');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex w-full scroll-mt-12 flex-col items-center py-20 pb-44 text-center dark:bg-darkBg dark:text-white"
      initial={{
        opacity: 0.8,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Hit me up!</SectionHeading>
      <div className="w-[min(100%,38rem)] px-4">
        <p className="mb-20 mt-6 text-gray-700 dark:text-white/80">
          Please contact me directly at{' '}
          <a className="underline" href="mailto:chandima.c.ekanayake@gmail.com">
            chandima.c.ekanayake@gmail.com
          </a>{' '}
          or through this form.
        </p>

        <form
          className="mt-10 flex flex-col dark:text-black"
          action={async (formData) => {
            const { error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success('Email sent successfully!');
          }}
        >
          <label htmlFor="senderEmail" className="sr-only">
            Your email
          </label>
          <input
            id="senderEmail"
            className="h-14 rounded-lg border bg-gray-50 px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:placeholder:text-darkBg dark:focus:bg-opacity-100"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <label htmlFor="message" className="sr-only">
            Your message
          </label>
          <textarea
            id="message"
            className="my-3 h-52 resize-none rounded-lg border bg-gray-50 p-4 transition-all dark:bg-opacity-80 dark:outline-none dark:placeholder:text-darkBg dark:focus:bg-opacity-100"
            name="message"
            placeholder="Your message 👋"
            required
            maxLength={5000}
          />
          {/* Honeypot: hidden from people, filled in by bots */}
          <div aria-hidden="true" className="absolute -left-[9999px]">
            <label htmlFor="website">Leave this field empty</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="flex justify-center">
            <SubmitBtn />
          </div>
        </form>
      </div>
    </motion.section>
  );
}
