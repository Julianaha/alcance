import { Login } from "../Login";
import Register from "../../components/Register";
import Header from "../../components/Header";
import { User } from "../User"

export const Home = () => {
  return (
    <>
      <Header/>
      <Login />
      <Register />
      <User/>
    </>
  );
};
