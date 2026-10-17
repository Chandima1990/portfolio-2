'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as React from 'react';

import { Button } from '@/common/components/ui';
import { useHasMounted } from '@/common/lib/hooks';

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  if (!hasMounted) return null;

  return (
    <Button
      className="bg-transparent p-0 text-gray-700 opacity-80 dark:text-white"
      size={'sm'}
      onClick={toggleTheme}
      aria-label={
        resolvedTheme === 'light'
          ? 'Switch to dark mode'
          : 'Switch to light mode'
      }
    >
      {resolvedTheme === 'light' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
}
