import {mongooseConnect} from '@/lib/mongoose';
import { Product } from '@/models/Product';

export default async function handleSubmit(req, res) {
	const { method } = req;
	await mongooseConnect();
	if (method === 'POST') {
		const { title, description, price } = req.body;
		const productDoc = await Product.create({ title, description, price });
		res.status(200).json(productDoc);
	} else {
		res.status(405).json({ message: 'Method not allowed' });
		return;
	}
}
