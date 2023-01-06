import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Error404 from './pages/Error404';
import Navbar from './components/Navbar';
import CurrentUserProvider from './context/CurrentUser';
import MealLog from './pages/MealLog';
import Avatar from './pages/Avatar';


function App() {
  return (
    <CurrentUserProvider>
      <Navbar />

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/meals' element={<MealLog/>}/>
          <Route exact path='/avatar' element={<Avatar/>}/>
          <Route path='/*' element={<Error404 />} />
        </Routes>
    </CurrentUserProvider>
  );
}

export default App;
