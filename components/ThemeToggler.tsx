"use client";

import { Button } from './ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import type { FC } from "react";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggler: FC<ThemeToggleProps> = (props) => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <div className="flex flex-row space-x-1">
        <button
          onClick={() => {
            setTheme("light");
          }}
          className="py-1 px-2 border-2 rounded-md"
        >
          light
        </button>
        <button
          onClick={() => {
            setTheme("dark");
          }}
          className="py-1 px-2 border-2 rounded-md"
        >
          dark
        </button>
        <button
          onClick={() => {
            setTheme("system");
          }}
          className="py-1 px-2 border-2 rounded-md"
        >
          system
        </button>
      </div>
      <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark' )}>
        <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
        <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      </Button>   
    </div>
  )
}

export default ThemeToggler;