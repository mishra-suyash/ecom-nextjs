import React from 'react';
import { Home, Orders, Products, Settings, StoreFrontIcon } from './Icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

const inactiveLink = 'flex gap-1 p-1 rounded-l-lg';
const activeLink = inactiveLink + ' bg-white text-blue-900';

const MenuItems = ({ className = '', name, icon,link='/', }) => {
   const router = useRouter();
   const isActive = link !== '/'?router.pathname.startsWith(link):link === router.pathname;
	return (
		<Link
			href={link}
			className={`${isActive ? activeLink : inactiveLink} ${className} `}
		>
			{icon}
			<span>{name}</span>
		</Link>
	);
};

const Nav = () => {
	return (
		<aside className='text-white p-4 pr-0 '>
			<Link href={'/'} className='flex gap-1 mb-4 mr-2'>
				<StoreFrontIcon />
				<span>ENGIFY</span>
			</Link>
			<nav className='flex flex-col gap-2 '>
				<MenuItems name='Dashboard' icon={<Home />} isActive={true} link='/' />
				<MenuItems name='Products' icon={<Products />} link='/products' />
				<MenuItems name='Orders' icon={<Orders />} link='/orders' />
				<MenuItems name='Setting' icon={<Settings />} link='/settings' />
			</nav>
		</aside>
	);
};

export default Nav;
