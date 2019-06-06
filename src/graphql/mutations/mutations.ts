import { GraphQLObjectType } from 'graphql';

import addProduct from './product/add';
import updateProduct from './product/update';
import removeProduct from './product/delete';

const Mutations = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addProduct,
		updateProduct,
		removeProduct
	}
});

export default Mutations;
