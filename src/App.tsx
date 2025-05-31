import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reg from "./pages/Reg/Reg"
import Auth from "./pages/Auth/Auth"
import Main from './pages/Main/Main';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/signup" element={<Reg />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
  );
}

export default App;
