const resolvers = {
	Query: {
		// Returns an array of tracks (Homepage data)
		tracksForHome: (_parent, _args, context, _info) => {
			const { dataSources } = context;
			return dataSources.trackAPI.getTracksForHome();
		},
	},
	Track: {
		// verbose for learning purposes
		author: (parent, _args, context, _info) => {
			const { authorId } = parent;
			const { dataSources } = context;
			return dataSources.trackAPI.getAuthor(authorId);
		},
	},
};

module.exports = resolvers;
