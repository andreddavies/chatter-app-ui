import { gql, useQuery } from "@apollo/client";

import { IUser } from "../../models/User";

const GET_USER = gql`
  query User {
    user {
      _id
      email
    }
  }
`;

const useGetCurrentLoggedUser = () => {
  return useQuery<{ user: IUser }>(GET_USER);
};

export { useGetCurrentLoggedUser };
