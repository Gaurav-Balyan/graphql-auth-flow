import gql from 'graphql-tag';

// Identify if the user is logged in
export default gql`
  {
    user {
      id
      email
    }
  }
`;
