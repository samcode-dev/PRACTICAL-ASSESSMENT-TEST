// query GetContinents($code: String!) {
//     continents(filter: {code: {regex: $code}}) {
//      code
//      name
//    }
//  }
import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetContries {
    countries {
      code
      name
      emojiU
      continent {
        name
      }
    }
  }
`;
