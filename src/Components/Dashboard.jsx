import Login from "./Login/Login";
import useToken from "../Hooks/useToken";
import jwtDecode from "jwt-decode";

const Dashboard = () => {
  const { token, setToken } = useToken();

  return !token ? (
    <Login setToken={setToken} />
  ) : (
    <div className="Db-container">
      {(() => {
        const { username } = jwtDecode(token).payload;
        return <h1 className="Db-heading">Welcome {username}!</h1>;
      })()}
    </div>
  );
};

export default Dashboard;
