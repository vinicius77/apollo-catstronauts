const { gql } = require('apollo-server');

const typeDefs = gql`
	"Queries all tracks for home page"
	type Query {
		tracksForHome: [Track!]!
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
