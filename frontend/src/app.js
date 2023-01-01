import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import UserData from './pages/UserData';
import CurrentUserProvider from './context/CurrentUser';


function App() {
  return (
    <CurrentUserProvider>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/userdata' element={<UserData />}/>
      </Routes>
    </CurrentUserProvider>
  );
}

export default App;
