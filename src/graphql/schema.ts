import { GraphQLSchema } from 'graphql';

import Queries from './queries/queries';
import Mutations from './mutations/mutations';

const Schema = new GraphQLSchema({
	query: Queries,
	mutation: Mutations
});

export default Schema;
