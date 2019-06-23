import typeDefs from "./gb.sdl";
import resolvers from "./resolvers/main";

import { makeExecutableSchema } from 'graphql-tools';

const Schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

export default Schema;
