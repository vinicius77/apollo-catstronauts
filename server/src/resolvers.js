const resolvers = {
	Query: {
		// Returns an array of tracks (Homepage data)
		tracksForHome: (_parent, _args, context, _info) => {
			const { dataSources } = context;
			return dataSources.trackAPI.getTracksForHome();
		},
		track: (_parent, args, context, _info) => {
			const { dataSources } = context;
			const { id } = args;
			return dataSources.trackAPI.getTrack(id);
		},
	},
	Track: {
		// verbose for learning purposes
		author: (parent, _args, context, _info) => {
			const { authorId } = parent;
			const { dataSources } = context;
			return dataSources.trackAPI.getAuthor(authorId);
		},
		modules: ({ id }, _args, { dataSources }) => {
			return dataSources.trackAPI.getTrackModules(id);
		},
	},
};

module.exports = resolvers;
