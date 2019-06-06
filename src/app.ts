import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import mongoose from 'mongoose';
import passport from 'passport';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';

import schema from './graphql/schema';
import routes from './app.routes';

import { MONGODB_DB, MONGODB_URI_FULL } from './core/constants';

const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect(MONGODB_URI_FULL, { promiseLibrary: require('bluebird') })
	.then(() => console.log(`connection successful in ${MONGODB_DB}`))
	.catch((err) => console.error(`✗ ${MONGODB_DB}`, err));

/**
 * App Config
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

/**
 * Route Config
 */
app.use('*', cors());
app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: global,
	graphiql: true,
}));
app.use('/', routes);

app.use((error, req, res, next) => {
	res.send({ 'error': error.message });
});

export default app;
