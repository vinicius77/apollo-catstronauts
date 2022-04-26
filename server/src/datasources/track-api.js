const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
	}

	/** Methods used by the resolver(s) */
	getTracksForHome = () => {
		return this.get('tracks');
	};

	getAuthor = (authorId) => {
		return this.get(`author/${authorId}`);
	};

	getTrack = (trackId) => {
		return this.get(`track/${trackId}`);
	};
}

module.exports = TrackAPI;
