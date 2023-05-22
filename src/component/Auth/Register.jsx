import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import app from '../../base'

function Register(props) {
    const [user,setUser] = useState({
        email: '',
        pass: ''
    })

    const navigate = useNavigate()

    const readValue = (e) => {
        const { name,value } = e.target;
        setUser({...user, [name]:value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            console.log(`data = `, user)
            await app.auth().createUserWithEmailAndPassword(user.email, user.pass)
                .then(res => {
                    toast.success('User registered successfully')
                    navigate('/signIn')
                }).catch(err => toast.error(err.message))
        }catch (err) {
            toast.error(err.message)
        }
    }

    return (
        <div className={'container'}>

            <div className="row mt-5">
                <div className="col-lg-6 col-md-6 offset-lg-3 offset-md-3">
                    <div className="card">
                        <div className="card-header bg-secondary">
                            <h3 className="text-center text-light card-title">Sign Up</h3>
                        </div>
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler} >
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email Id</label>
                                    <input type="email" name="email" value={user.email} onChange={readValue} id="email" className="form-control" required />
                                </div>

                                <div className="form-group mt-2">
                                    <label htmlFor="pass">Password</label>
                                    <input type="password" name="pass" value={user.pass} onChange={readValue} id="pass" className="form-control" required/>
                                </div>

                                <div className="form-group mt-2">
                                    <input type="submit" value="Sign Up" className="btn btn-outline-success"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default Register