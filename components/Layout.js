import Image from 'next/image';
import { Inter } from 'next/font/google';

import { useSession, signIn, signOut } from 'next-auth/react';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children}) {
	const { data: session, status } = useSession();
	if (!session) {
		return (
			<div className='bg-blue-900 w-screen h-screen flex items-center'>
				<div className='text-center w-full'>
					<button
						className='bg-white p-2 rounded-lg '
						onClick={() => signIn('google')}
					>
						Login With Google
					</button>
				</div>
			</div>
		);
	} else {
		return (
			<div className='bg-blue-900 w-screen min-h-screen flex '>
				<Nav />
				<div className='bg-white flex-grow mt-1 mr-2 rounded-lg p-4 '>
					{children}
				</div>
			</div>
		);
	}
}
