import React from 'react';
import { Layout } from '../components';
import { gql } from '@apollo/client';

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
	return <Layout grid> </Layout>;
};

export default Tracks;
