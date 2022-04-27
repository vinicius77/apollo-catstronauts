import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';

export const GET_TRACK = gql`
	query getTrack($trackId: ID!) {
		track(id: $trackId) {
			id
			title
			thumbnail
			modulesCount
			author {
				id
				name
				photo
			}
			length
			numberOfViews
			description
			modules {
				id
				title
				length
			}
		}
	}
`;

const Track = ({ trackId }) => {
	return <Layout></Layout>;
};

export default Track;
