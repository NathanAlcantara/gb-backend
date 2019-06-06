import { GraphQLList } from 'graphql';

import Product from '../../../models/Product';
import ProductType from '../../types/productType';

const allProducts = {
	type: new GraphQLList(ProductType),
	resolve: () => {
		const products = Product.find().exec();
		if (!products) {
			throw new Error('Não foi possível encontrar nenhum produto');
		}
		return products;
	}
};

export default allProducts;
