import { gql, useQuery } from "@apollo/client";

import { IUser } from "../../models/User";

const GET_USER = gql`
  query Me {
    me {
      _id
      email
    }
  }
`;

const useGetCurrentLoggedUser = () => {
  return useQuery<{ user: IUser }>(GET_USER);
};

export { useGetCurrentLoggedUser };
