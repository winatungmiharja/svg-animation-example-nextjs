import * as React from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';

import clsxm from '@/lib/clsxm';

import UnderlineLink from '../links/UnderlineLink';

const links1 = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'Service' },
];

const links2 = [
  { href: '/', label: 'Potofolio' },
  { href: '/', label: 'Contact Us' },
];
export default function Header() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <>
      <header className='hidden sticky top-0 z-50 md:block'>
        <nav className='layout flex relative justify-between items-center h-16'>
          <ul className='flex justify-between items-center space-x-16'>
            {links1.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnderlineLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnderlineLink>
              </li>
            ))}
          </ul>
          <h3 className='absolute left-1/2 -translate-x-1/2'>The Company</h3>
          <ul className='flex justify-between items-center space-x-16 text-white'>
            {links2.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnderlineLink href={href} className='hover:text-gray-200'>
                  {label}
                </UnderlineLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <header className='block sticky top-0 z-50 md:hidden'>
        <nav className='layout flex relative justify-between items-center h-16'>
          <h3>The Company</h3>
          <div
            className={clsxm(
              'p-2 mr-2 text-white bg-indigo-500 rounded-full ring-1 ring-white shadow-md cursor-pointer',
              [open ? 'hidden ' : 'block']
            )}
          >
            <IoMdMenu size={25} onClick={() => setOpen(true)} />
          </div>
          <div
            className={clsxm('ease opacity-0 transition-opacity duration-300', [
              open ? 'block opacity-80' : 'hidden opacity-0',
            ])}
          >
            <div className='fixed inset-0 p-8 bg-gradient-to-r from-indigo-500 to-blue-500'>
              <div className='text-center'>
                <IoMdClose
                  size={25}
                  className='mt-4 ml-auto text-white cursor-pointer'
                  onClick={() => setOpen(false)}
                />
              </div>
              <ul className='flex flex-col justify-center items-center h-full'>
                <div className='flex flex-col gap-2'>
                  {links1.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <UnderlineLink
                        href={href}
                        className='text-xl text-white hover:text-gray-200'
                      >
                        {label}
                      </UnderlineLink>
                    </li>
                  ))}
                  {links2.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                      <UnderlineLink
                        href={href}
                        className='text-xl text-white hover:text-gray-200'
                      >
                        {label}
                      </UnderlineLink>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
