import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link';

const products = () => {
  return (
		<Layout>
			<Link className='btn-primary' href={'/products/new'}  >
            New Product
         </Link>
		</Layout>
	);
}

export default products