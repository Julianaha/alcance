import { Home } from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/index";
import { User } from "./pages/User/User";


import "./styles/global.css";

export const App = () => {
  

  return (

    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login  />} />
        <Route path="user" element={<User  />} />

      </Routes>  
    </BrowserRouter>

  );
};
