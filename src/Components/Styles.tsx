import styled, { css } from 'styled-components';

export const Main = styled.main`
  padding: 1rem;
`;

export const Container = styled.section`
  margin-top: 3rem;
  border: 1px solid #333;
  height: 70vh;
  overflow-y: auto;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

export const Header = styled.div`
  text-align: center;
  border-bottom: 1px solid #333;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const H2 = styled.h2`
  width: '100%';
  margin: 0;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  color: #333;
`;

export const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;

  border-bottom: 1px solid #333;
  padding-bottom: 1rem;
  padding-left: 1rem;
`;

export const SearchContainer = styled.form`
  display: flex;
  gap: 2rem;
  height: 30px;
`;

export const Search = styled.input`
  padding: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.5rem 2rem;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CountriesContainer = styled.div`
  height: 100%;
  max-height: 800px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 95%;
  padding-top: 2rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LinkContainer = styled.div`
  padding: 0.5rem 2rem;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;
`;
