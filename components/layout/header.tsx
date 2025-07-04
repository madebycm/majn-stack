'use client';
import { cn } from '@/lib/utils';
import { useScroll } from 'motion/react';
import { useRef, useState } from 'react';

export function Navigation9({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', '100px start'],
  });

  scrollYProgress.on('change', (latest) => {
    setHasScrolled(latest > 0);
  });

  return (
    <div
      ref={ref}
      className='relative mx-auto h-[100vh] max-w-7xl overflow-y-auto px-6 lg:px-8'
    >
      <div className='sticky top-8'>
        <div
          className={cn(
            `flex w-full items-center justify-between rounded-full border transition-all duration-200 ease-out`,
            hasScrolled
              ? 'border-zinc-200 bg-white/80 px-2 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80'
              : 'border-transparent bg-transparent px-0 backdrop-blur-0'
          )}
        >
          <div className='flex w-full items-center justify-between p-2'>
            <a href='#' className='p-1'>
              <span className='sr-only'>Your Company</span>
              <svg
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 70 70'
                aria-label='MP Logo'
                width={70}
                height={70}
                className='h-8 w-auto text-zinc-950 dark:text-white'
                fill='none'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeWidth={3}
                  d='M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263'
                />
              </svg>
            </a>
            <div className='flex gap-x-6 pr-6 sm:gap-x-12 sm:pr-12'>
              <a
                href='#'
                className='text-sm/6 font-normal text-zinc-900 dark:text-zinc-100'
              >
                Login
              </a>
              <a
                href='#'
                className='text-sm/6 font-normal text-zinc-900 dark:text-zinc-100'
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* main content */}
      <div className='mt-32'>
        {children}
      </div>
    </div>
  );
}
