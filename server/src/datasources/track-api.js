const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseUrl = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
		// https://fake-spacecats-rest-api.cat/
	}

	/** Methods used by the resolver(s) */
	getTracks = () => {
		return this.get('tracks');
	};

	getAuthor = (authorId) => {
		return this.get(`author/${authorId}`);
	};

	/** Spacecats Example */
	getSpaceCats() {
		return this.get('spacecats');
	}

	getMissions(catId) {
		return this.get(`spacecats/${catId}/missions`);
	}
}

module.exports = TrackAPI;
