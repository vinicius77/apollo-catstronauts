const { gql } = require('apollo-server');

const typeDefs = gql`
	"Queries all tracks for home page"
	type Query {
		tracksForHome: [Track!]!
		spaceCats: [SpaceCat]
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
	}

	"Well, it is an author of the track"
	type Author {
		id: ID!
		name: String!
		photo: String
	}

	type SpaceCat {
		id: ID!
		name: String!
		age: Int
		missions: [Mission]
	}

	type Mission {
		id: ID!
		name: String!
		description: String!
	}
`;

module.exports = typeDefs;
