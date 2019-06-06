import { GraphQLID } from 'graphql';

import Product from '../../../models/Product';
import ProductType from '../../types/productType';

const oneProduct = {
	type: ProductType,
	args: {
		id: {
			name: '_id',
			type: GraphQLID
		}
	},
	resolve: (root, params) => {
		const productDetails = Product.findById(params.id).exec();
		if (!productDetails) {
			throw new Error(`Não foi possível encontrar o produto com o id: ${params.id}`);
		}
		return productDetails;
	}
};

export default oneProduct;
