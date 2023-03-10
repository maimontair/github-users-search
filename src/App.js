import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
