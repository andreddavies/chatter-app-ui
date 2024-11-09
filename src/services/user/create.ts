import { gql, useMutation } from "@apollo/client";

import { IUser } from "../../models/User";

interface ICreateUserInput {
  createUserInput: {
    email: string;
    password: string;
  };
}

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`;

const useCreateUser = () => {
  return useMutation<IUser, ICreateUserInput>(CREATE_USER_MUTATION);
};

export { useCreateUser, type ICreateUserInput };
