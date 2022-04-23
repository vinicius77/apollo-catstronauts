import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import QueryResult from '../components/query-result';
import Track from '../containers/track-card';

/** === 
export const SPACECATS = gql`
  query ListSpaceCats {
    spaceCats{
      name
      age
      missions{
        name
        description
      }
    }
  }
` === */

export const TRACKS = gql`
	query getTracks {
		tracksForHome {
			id
			title
			thumbnail
			length
			modulesCount
			author {
				id
				name
				photo
			}
		}
	}
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
	const { data, error, loading } = useQuery(TRACKS);

	return (
		<QueryResult error={error} loading={loading} data={data}>
			<Layout grid>
				{data?.tracksForHome?.map((track) => (
					<Track key={track.id} track={track} />
				))}
			</Layout>
		</QueryResult>
	);

	/** === They have a built-in custom component to 
   *  === deal with all the heavy lifting 
  if (error) return `${error.message}`;
	if (loading) return 'Loading';
	return <Layout grid> {console.log(data)} </Layout>; **/
};

export default Tracks;
