import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { ToastContainer} from "react-toastify";
import Home from "./component/default/Home";
import Menu from "./component/default/Menu";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import PrivateRoute from "./AuthGuard/PrivateRoute";
import Pnf from "./component/default/Pnf";

function App(props) {
  return (
      <BrowserRouter>
                <Menu/>
                <ToastContainer autoClose={4000} position={'top-right'} />
                <Routes>
                    <Route element={<PrivateRoute/>} >
                            <Route path={`/`} element={<Home/>} />
                    </Route>
                    <Route path={`/signIn`} element={<Login/>} />
                    <Route path={`/signUp`} element={<Register/>} />
                    <Route path={`/*`} element={<Pnf/>} />
                </Routes>
      </BrowserRouter>
  )
}

export default App