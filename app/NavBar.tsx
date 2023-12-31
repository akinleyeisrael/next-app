'use client'

import React from 'react'
import Link from 'next/link'
import { AiFillBug } from 'react-icons/ai';
import { link } from 'fs';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  // use client because it a browser api
    const currentPath = usePathname();

    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'}
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-6 h-14 items-center'>
        <Link href='/'><AiFillBug/></Link>
        <ul className='flex space-x-6 '>
            {links.map(link => 
            <Link key={link.href} className={`${link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500'}text-zinc-500 hover:text-zinc-800 transition-colors`} href={link.href}>
              {link.label}
            </Link>)}
         
        </ul>

    </nav>
  )
}

export default NavBar