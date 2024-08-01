import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import HomePage from './Pages/Home';

function App() {

  return (
    <Router>
      <Routes>
      <Route path = "/" element={<Login />}/>
      <Route path = "/home" element = {<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

