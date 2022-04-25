const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseUrl = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
	}

	/** Methods used by the resolver(s) */
	getTracksForHome = () => {
		return this.get('tracks');
	};

	getAuthor = (authorId) => {
		return this.get(`author/${authorId}`);
	};
}

module.exports = TrackAPI;
