import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links1 = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'Service' },
];

const links2 = [
  { href: '/', label: 'Potofolio' },
  { href: '/', label: 'Contact Us' },
];
export default function Header() {
  return (
    <header className='sticky top-0 z-50'>
      <nav className='flex h-16 items-center justify-between layout relative'>
        <ul className='flex items-center justify-between space-x-16'>
          {links1.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <UnstyledLink href={href} className='hover:text-gray-600'>
                {label}
              </UnstyledLink>
            </li>
          ))}
        </ul>
        <h3 className='-translate-x-1/2 absolute left-1/2'>The Company</h3>
        <ul className='flex items-center justify-between space-x-16 text-white'>
          {links2.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <UnstyledLink href={href} className='hover:text-gray-200'>
                {label}
              </UnstyledLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
