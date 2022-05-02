import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://apollo-castronauts-demo.herokuapp.com',
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<React.StrictMode>
			<GlobalStyles />
			<Pages />
		</React.StrictMode>
	</ApolloProvider>,
	document.getElementById('root')
);
