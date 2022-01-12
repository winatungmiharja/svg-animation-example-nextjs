import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'secondary',
}

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'font-extrabold font-fivo text-xl',
          'inline-flex items-center px-8 py-3 rounded-full',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'shadow-sm',
          'duration-150 ease-in-out transition-all',
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'text-white animate-gradient-x border border-transparent',
              'bg-gradient-to-r from-primary-500 to-violet-500',
              'hover:bg-gradient-to-r hover:from-primary-500 hover:to-green-500 hover:shadow-primary-100 hover:scale-105 hover:shadow-lg',
              'disabled:hover:bg-none disabled:bg-gray-300/30 disabled:bg-none disabled:border-gray-300',
              'disabled:hover:scale-100 disabled:text-gray-300 disabled:hover:shadow-none',
            ],
          ],

          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent hover:text-transparent disabled:cursor-wait transition-none',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              '-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2',
              {
                'text-white': ['primary', 'dark'].includes(variant),
                'text-black': ['light'].includes(variant),
                'text-primary-500': ['outline', 'ghost'].includes(variant),
              }
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {children}
      </button>
    );
  }
);

export default Button;
