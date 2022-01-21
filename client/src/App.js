import React, { createContext, useReducer } from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import ProfilePage from "./Component/ProfilePage/ProfilePage";
import Login from './Component/Login/Login';
import Logout from './Component/Unused/Logout';
import Register from './Component/Register/Register';
import Errorpage from './Component/Error/Errorpage';
import { reducer, initialState } from "./reducer/UserReducer";
export const Context = createContext();
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Context.Provider value={ {
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      } }>
        <Routes>
          {/* <Route path="/" element={ <Home></Home> }></Route> */ }
          <Route path="/" element={ state.user ? <Home></Home> : <Register></Register> }></Route>
          <Route path="/profile/:username" element={ <ProfilePage></ProfilePage> }></Route>
          <Route path="/login" element={ <Login></Login> }></Route>
          <Route path="/register" element={ <Register></Register> }></Route>
          <Route path="/logout" element={ <Logout></Logout> }></Route>
          <Route path="*" element={ <Errorpage></Errorpage> }></Route>
        </Routes>
      </Context.Provider>
    </>
  );

};

export default App;