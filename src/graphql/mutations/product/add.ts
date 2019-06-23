import {
	GraphQLString,
	GraphQLInt,
	GraphQLFloat,
	GraphQLList,
	GraphQLNonNull,
} from 'graphql';

import Product from '../../../models/Product';
import ProductType from '../../types/productType';

const addProduct = {
	type: ProductType,
	args: {
		code: { type: new GraphQLNonNull(GraphQLInt) },
		name: { type: new GraphQLNonNull(GraphQLString) },
		productType: { type: new GraphQLNonNull(GraphQLString) },
		photosURL: { type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLString))) },
		actualPrice: { type: new GraphQLNonNull(GraphQLFloat) },
		exPrice: { type: GraphQLFloat },
		paymentType: { type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLString))) },
		numberOfParcels: { type: GraphQLInt },
		valueOfParcel: { type: new GraphQLNonNull(GraphQLFloat) },
		colors: { type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLString))) },
		sizes: { type: new GraphQLList(GraphQLString) },
	},
	resolve: (root, params) => {
		const newProduct = new Product(params).save();
		if (!newProduct) {
			throw new Error('Não foi possível salvar o produto');
		}
		return newProduct;
	}
};

export default addProduct;
