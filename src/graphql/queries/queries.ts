import { GraphQLObjectType } from 'graphql';

import allProducts from './product/all';
import oneProduct from './product/one';

const Queries = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		allProducts,
		oneProduct,
	}
});

export default Queries;
