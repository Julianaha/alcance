import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login/index";
import { User } from "./pages/User/index";
import { Provider } from "./Contexts/Contexts";
import { Construcao } from "./pages/Construction/Construction";

export const Router = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="user" element={<User />} />
          <Route path="construcao" element={<Construcao />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
