import Image from 'next/image';
import { Inter } from 'next/font/google';

import { useSession, signIn, signOut } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const { data: session, status } = useSession();
	if (!session) {
		return (
			<div className='bg-blue-900 w-screen h-screen flex items-center'>
				<div className='text-center w-full'>
					<button className='bg-white p-2 rounded-lg ' onClick={()=>signIn('google')}>
						Login With Google
					</button>
				</div>
			</div>
		);
	}
  else{
    return (
      <div className='bg-blue-900 w-screen h-screen flex items-center'>
        <div className='text-center w-full'>
          <button className='bg-white p-2 rounded-lg ' onClick={signOut}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}
