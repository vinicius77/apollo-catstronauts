const { gql } = require('apollo-server');

const typeDefs = gql`
	"Queries all tracks for home page"
	type Query {
		tracksForHome: [Track!]!
		"Fetch a specific track, provided a track's ID"
		track(id: ID!): Track
	}

	type Mutation {
		incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
	}

	type IncrementTrackViewsResponse {
		"Similar to HTTP status code, represents the status of the mutation"
		code: Int!
		"Indicates whether the mutation was successful"
		success: Boolean!
		"Human-readable message for the UI"
		message: String!
		"Newly updated track after a successful mutation"
		track: Track
	}

	"""
	A track is a group of Modules that teaches about a specific topic
	Didn't find a better description XD
	"""
	type Track {
		id: ID!
		title: String!
		thumbnail: String
		length: Int
		modulesCount: Int
		author: Author!
		numberOfViews: Int
		description: String
		modules: [Module!]!
	}

	type Module {
		id: ID!
		title: String!
		length: Int
	}

	"Well, it is an author of the track"
	type Author {
		id: ID!
		name: String!
		photo: String
	}
`;

module.exports = typeDefs;
