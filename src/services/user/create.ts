import { gql, useMutation } from "@apollo/client";
import { IUser } from "../../models/User";

interface CreateUserInput {
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
  return useMutation<IUser, CreateUserInput>(CREATE_USER_MUTATION);
};

export { useCreateUser };
