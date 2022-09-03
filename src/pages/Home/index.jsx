import { Login } from "../../pages/Login";
import Register from "../../components/Register";
import Header from "../../components/Header";

export const Home = () => {
  return (
    <>
      <Header/>
      <Login />
      <Register />
    </>
  );
};
