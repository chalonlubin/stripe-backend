import React, { useState } from "react";
import Login from "./Login/Login";

const Dashboard = () => {
  const [token, setToken] = useState({});

  return !token?.token ? (
    <Login setToken={setToken} />
  ) : (
    <div className="db-container">
      <h1 className="db-heading">Welcome</h1>
    </div>
  );
};

export default Dashboard;
