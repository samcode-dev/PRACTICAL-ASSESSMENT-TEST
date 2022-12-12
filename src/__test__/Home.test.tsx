import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Home from '../Screens/Home';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

test('Should allow user search by entering full country name and clicking button', async () => {
  render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ApolloProvider>
  );
  const inputElement = screen.getByPlaceholderText('Enter keyword');
  user.type(inputElement, 'Netherlands');

  const submitButton = screen.getByLabelText('search-countries');

  user.click(submitButton);

  const country = await screen.findAllByLabelText('country-Netherlands');

  expect(country.length).toEqual(1);
});

test('Should allow user search by entering a valid keyword and clicking button', async () => {
  render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ApolloProvider>
  );
  const inputElement = screen.getByPlaceholderText('Enter keyword');
  user.type(inputElement, 'en');

  const submitButton = screen.getByLabelText('search-countries');

  user.click(submitButton);

  const country = await screen.findAllByLabelText(/^country-/);

  expect(country.length).toBeGreaterThanOrEqual(3);
});
