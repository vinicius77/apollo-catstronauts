const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');
const PORT = 5001;

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => {
		return { trackAPI: new TrackAPI() };
	},
});

server.listen({ port: process.env.PORT || 5001 }, () =>
	console.log(`Listening on port ${PORT} \nQuery at https://studio.apollographql.com/dev`)
);
