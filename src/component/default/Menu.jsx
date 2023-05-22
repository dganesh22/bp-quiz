import React, { useContext } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import {AuthContext} from "../../AuthContext";
import { toast } from "react-toastify";
import app from '../../base'

function Menu(props) {
    const context = useContext(AuthContext)
    const currentUser = context.currentUser

    const navigate = useNavigate()

    const logoutUser = async () => {
        if(window.confirm('Are you sure to logout?')) {
            await  app.auth().signOut().then(res => {
                toast.success("User Logout Successfully")
                navigate(`/signIn`)
            }).catch(err => toast.error(err.message))
        }
    }

    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
            <div className="container">
                <NavLink to={`/`} className="navbar-brand">BEP-QUIZ</NavLink>

                <button className="btn btn-dark" data-bs-toggle={'offcanvas'} data-bs-target={"#menuBlk"}>
                    <i className="bi bi-menu-app"></i>
                </button>
            </div>
        </nav>

                <div className="offcanvas offcanvas-end" data-bs-scroll={true} tabIndex={-1} id={'menuBlk'}>
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title">Menu</h5>
                        <button type={'button'} data-bs-dismiss={'offcanvas'} className="btn-close"></button>
                    </div>
                    <div className="offcanvas-body">
                        {
                            currentUser ? (
                                     <div className="list-group text-center">

                                        <NavLink onClick={logoutUser} to={`/`} className="list-group-item btn btn-danger">Logout</NavLink>
                                    </div>
                            ): (
                                 <div className="list-group text-center">
                                    <NavLink to={`/signIn`} className="list-group-item list-group-item-action">Sign In</NavLink>
                                    <NavLink to={`/signUp`} className="list-group-item list-group-item-action">Sign Up</NavLink>
                                </div>
                            )
                        }
                    </div>
                </div>
        </React.Fragment>
    )
}

export default  Menu