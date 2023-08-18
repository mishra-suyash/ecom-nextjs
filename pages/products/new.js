import Layout from '@/components/Layout';
import axios from 'axios';
import React from 'react';

const NewProduct =  () => {
	const [title, setTitle] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [price, setPrice] = React.useState('');
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			title,
			description,
			price,
		};
		await axios.post('../api/products', data);
	};
	return (
		<Layout>
			<form className='flex flex-col' onSubmit={handleSubmit}>
				<h1 className=''>New Product</h1>
				<label className=''>Product Name : </label>
				<input
					type='text'
					placeholder='Products Name'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label className=''>Product Description : </label>
				<textarea
					placeholder='Product Description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
				<label className=''>Product Price(in $) : </label>
				<input
					type='text'
					placeholder='Products Name'
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>
				<button type='submit' className='btn-primary'>
					SAVE
				</button>
			</form>
		</Layout>
	);
};

export default NewProduct;
