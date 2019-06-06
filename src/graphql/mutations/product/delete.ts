import { GraphQLID, GraphQLNonNull, } from 'graphql';

import Product from '../../../models/Product';
import ProductType from '../../types/productType';

const removeProduct = {
	type: ProductType,
	args: {
		id: { type: new GraphQLNonNull(GraphQLID) }
	},
	resolve(root, params) {
		const remProduct = Product.findByIdAndDelete(params.id).exec();
		if (!remProduct) {
			throw new Error(`Não foi possível excluir o produto com o id ${ params.id }`);
		}
		return remProduct;
	}
};

export default removeProduct;
