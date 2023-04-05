import React, { useState } from "react";
import PropTypes from "prop-types";

const Login = ({ setToken }) => {
  const [userCred, setUserCred] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser(userCred);
    token.success === true ? setToken(token) : setError(token.message);
    console.log("token - ", token);
  };

  async function loginUser({ username, password }) {
    return fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((data) => data.json())
      .catch((error) => console.log(error));
  }

  return (
    <div className="l-container">
      <h1>Sign Up Here</h1>
      {error !== undefined ? <p>{error}</p> : null}
      <form onSubmit={handleSubmit} className="l-form">
        <p>UserName</p>
        <input
          type="text"
          required
          onChange={(e) => {
            setUserCred((prev) => {
              return { ...prev, username: `${e.target.value}` };
            });
          }}
          placeholder="JohnDoe"
        />
        <p>PassWord</p>
        <input
          type="password"
          required
          onChange={(e) => {
            setUserCred((prev) => {
              return { ...prev, password: `${e.target.value}` };
            });
          }}
          placeholder="Please enter a strong password"
        />
        <button type="submit">Submit</button>
        <div>
          <p>
            <input type="checkbox" />
            Remember Me
          </p>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
