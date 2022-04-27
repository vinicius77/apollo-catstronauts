import React from 'react';
import { QueryResult, Layout } from '../components';
import { TrackDetail } from '../components/track-detail';

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
	const { loading, error, data } = useQuery(GET_TRACK, {
		variables: {
			trackId,
		},
	});

	return (
		<Layout>
			<QueryResult data={data} error={error} loading={loading}>
				<TrackDetail track={data?.track} />
			</QueryResult>
		</Layout>
	);
};

export default Track;
