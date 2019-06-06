import {
	GraphQLID,
	GraphQLInt,
	GraphQLString,
	GraphQLFloat,
	GraphQLList,
	GraphQLObjectType
} from 'graphql';
import GraphQLDate from 'graphql-date';

const ProductType = new GraphQLObjectType({
	name: 'Product',
	fields: () => (
		{
			_id: { type: GraphQLID },
			code: { type: GraphQLInt },
			name: { type: GraphQLString },
			productType: { type: GraphQLString },
			photosURL: { type: GraphQLList(GraphQLString) },
			actualPrice: { type: GraphQLFloat },
			exPrice: { type: GraphQLFloat },
			paymentType: { type: GraphQLList(GraphQLString) },
			numberOfParcels: { type: GraphQLInt },
			valueOfParcel: { type: GraphQLFloat },
			colors: { type: GraphQLList(GraphQLString) },
			sizes: { type: GraphQLList(GraphQLString) },
			updatedDate: { type: GraphQLDate }
		}
	)
});

export default ProductType;
