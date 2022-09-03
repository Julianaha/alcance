import React from 'react';
import Navbar from "./components/Header/Navbar";
import "./styles/global.css";
import { BrowserRouter as Router} from 'react-router-dom';

import Container from './components/Header/Container';

function App() {
  return (
    <Container customClass="min-height">
    <Router>
       <Navbar />
    </Router>
    </Container>

  );
}

export default App;
