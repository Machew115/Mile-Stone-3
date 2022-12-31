import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CurrentUserProvider from './context/CurrentUser';
import MealLog from './pages/MealLog';


function App() {
  return (
    <CurrentUserProvider>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/meals' element={<MealLog/>}/>
      </Routes>
    </CurrentUserProvider>
  );
}

export default App;
