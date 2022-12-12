import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {
  Button,
  Container,
  CountriesContainer,
  CountryContainer,
  H2,
  Header,
  Hero,
  LinkContainer,
  Main,
  Search,
  SearchContainer,
} from '../Components/Styles';
import { GET_COUNTRIES } from '../Queries';
import { GetCountryInterface } from '../interfaces';
import { Link } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';

const Home = () => {
  const { loading, error, data } = useQuery<{
    countries: Array<GetCountryInterface>;
  }>(GET_COUNTRIES);
  // const [
  //   executeSearch,
  //   { loading: loadingFilter, error: errorFilter, data: dataFilter },
  // ] = useLazyQuery<{
  //   countries: Array<GetCountryInterface>;
  // }>(FILTER_COUNTRIES);

  const [countries, setCountries] = useState<Array<GetCountryInterface>>([]);

  const [keyword, setKeyword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filterCountries = countries.filter((country) => {
      const _countryName = country?.name?.toLowerCase();
      return _countryName?.includes(keyword.toLowerCase());
    });

    setCountries(filterCountries);
  };

  useEffect(() => {
    if (data) {
      setCountries(data?.countries);
    }
  }, [data]);

  return (
    <Main>
      <Container>
        <Header>Countries Catalog</Header>
        <H2>Keyword</H2>
        <Hero>
          <SearchContainer onSubmit={handleSubmit}>
            <Search
              placeholder='Enter keyword'
              value={keyword}
              onChange={(e) => {
                if (data?.countries) {
                  setCountries(data?.countries);
                }
                setKeyword(e.target.value.trim());
              }}
              required
            ></Search>

            <Button type='submit' aria-label='search-countries'>
              Search
            </Button>
          </SearchContainer>
        </Hero>

        <CountriesContainer>
          {loading ? <p>Loading...</p> : null}
          {error ? <p style={{ color: 'red' }}>{error.message}</p> : null}
          {countries?.map((x) => {
            // console.log(`country-${x?.name}`);
            return (
              <CountryContainer key={x?.name}>
                <div aria-label={`country-${x?.name}`}>
                  <ReactCountryFlag countryCode={x?.code} svg /> {x.name}
                </div>

                <div>Continent: {x?.continent?.name}</div>
                <LinkContainer>
                  <Link
                    to={`/country/${x.name}`}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    See details...
                  </Link>
                </LinkContainer>
              </CountryContainer>
            );
          })}
        </CountriesContainer>
      </Container>
    </Main>
  );
};

export default Home;

// const useFilterCountries = (keyword) => {
//   const { loading, error, data } = useLazyQuery<{
//     countries: Array<GetCountryInterface>;
//   }>(FILTER_COUNTRIES);

//   return { loading, error, data };
// };
