import React from 'react'
import { useSession, getSession } from 'next-auth/react';
import Image from 'next/image';
import { UserIcon } from '@/components/Icons';

const HeaderBar = ({className}) => {
  const { data: session, status } = useSession();
	if (status === 'loading') {
		return <p className='text-xl text-blue-900'>Loading...</p>;
	}
  return (
		<div className={`text-blue-900 flex justify-between ${className} `} >
			<h2>Hello, {session?.user?.name ?? session?.user?.email}</h2>
			<div className='flex bg-gray-300 text-black gap-1 items-center rounded-full '>
				{session?.user?.image ? (
					<img
						src={session.user.image}
						alt={session?.user?.name ?? session?.user?.email}
						className='rounded-full h-6 w-6 ml-1'
					/>
				) : (
					<UserIcon className='h-6 w-6 rounded-full stroke-blue-700 bg-slate-300' />
				)}
				<span className='py-1 px-2'>
					{session?.user?.name ?? session?.user?.email}
				</span>
			</div>
		</div>
	);
}

export default HeaderBar