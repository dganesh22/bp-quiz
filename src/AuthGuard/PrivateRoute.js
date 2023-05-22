import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import {AuthContext} from "../AuthContext";

function PrivateRoute(props) {
    const context = useContext(AuthContext)
    const currentUser = context.currentUser

    return (
        <React.Fragment>
            {
                currentUser ? <Outlet /> : <Navigate to={`/signIn`} />
            }
        </React.Fragment>
    )
}

export  default PrivateRoute