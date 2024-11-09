import { useState } from "react";

import { API_URL } from "../../constants/urls";
import client from "../../constants/apollo-client";

interface ILoginRequest {
  email: string;
  password: string;
}

const useLogin = () => {
  const [error, setError] = useState("");

  const login = async (request: ILoginRequest) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "applicaion/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      if (response.status === 401) setError("Credentials are not valid");
      else setError("Unknown error occured");

      return;
    }

    setError("");
    await client.refetchQueries({ include: "active" });
  };

  return {
    login,
    error,
  };
};

export { useLogin, type ILoginRequest };
