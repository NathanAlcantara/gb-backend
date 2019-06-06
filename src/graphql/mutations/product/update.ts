import {
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLFloat,
	GraphQLList,
	GraphQLNonNull,
} from 'graphql';

import Product from '../../../models/Product';
import ProductType from '../../types/productType';

const updateProduct = {
	type: ProductType,
	args: {
		id: {type: new GraphQLNonNull(GraphQLID)},
		name: {type: new GraphQLNonNull(GraphQLString)},
		productType: {type: new GraphQLNonNull(GraphQLString)},
		photosURL: {type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLString)))},
		actualPrice: {type: new GraphQLNonNull(GraphQLFloat)},
		exPrice: {type: GraphQLFloat},
		paymentType: {type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLString)))},
		numberOfParcels: {type: GraphQLInt},
		valueOfParcel: {type: new GraphQLNonNull(GraphQLFloat)},
		colors: { type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLString))) },
		sizes: { type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLString))) },
	},
	resolve(root, params) {
		const updateProduct = Product.findByIdAndUpdate(
			params.id,
			{
				name: params.name,
				productType: params.productType,
				photosURL: params.photosURL,
				actualPrice: params.actualPrice,
				exPrice: params.exPrice,
				paymentType: params.paymentType,
				numberOfParcels: params.numberOfParcels,
				valueOfParcel: params.valueOfParcel,
				colors: params.colors,
				sizes: params.sizes
			}).exec();
		if (!updateProduct) {
			throw new Error(`Não foi possível atualizar o produto com o id ${params.id}`);
		}
		return updateProduct;
	}
};

export default updateProduct;
