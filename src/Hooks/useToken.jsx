import { useState } from "react";

/** Custom useToken hook, where we can hold all the functionality of tokens. */
const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    console.log("tokenString - ", tokenString);
    const userToken = JSON.parse(tokenString);
    console.log("userToken - ", userToken);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());
  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
};

export default useToken;
