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
	Mutation: {
		incrementTrackViews: async (_parent, args, context, _info) => {
			const { id } = args;
			const { dataSources } = context;

			try {
				const track = await dataSources.trackAPI.incrementTrackViews(id);
				return {
					code: 200,
					success: true,
					message: `Successfully updated track views with id ${id}`,
					track,
				};
			} catch (error) {
				return {
					code: error.extensions.response.status,
					success: false,
					message: error.extensions.response.body,
					track: null,
				};
			}
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
		durationInSeconds: (parent, _args, _context, _info) => {
			const { length } = parent;

			return length;
		},
	},
	Module: {
		durationInSeconds: (parent) => {
			const { length } = parent;
			return length;
		},
	},
};

module.exports = resolvers;
