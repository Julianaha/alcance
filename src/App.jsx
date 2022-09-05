import { Home } from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/index";
import { User } from "./pages/User/index";
import { Provider } from "./Contexts/Contexts";


import "./styles/global.css";

export const App = () => {
  

  return (
<Provider>
<BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login  />} />
        <Route path="user" element={<User  />} />

      </Routes>  
    </BrowserRouter>
</Provider>
    

  );
};
