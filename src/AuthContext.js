import React, {useState, useEffect, useCallback} from 'react'
import app from './base'

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
    const [currentUser,setCurrentUser] = useState(null)
    const [pending,setPending] = useState(true)

    const initAuth = useCallback(() => {
        const getAuth = async () => {
            // console.log('firebase auth,', app)

        await app.auth().onAuthStateChanged((user) => {
           if(user) {
                 setCurrentUser(user)
                 setPending(false)
             } else {
               setCurrentUser(null)
               setPending(false)
           }
        })
        }

        getAuth()
    },[currentUser])

    useEffect(() => {
        initAuth()
    },[initAuth])


    // if(pending) {
    //     return (
    //         <div className="spinner-border txt-succ'" role={'status'}>
    //             <span className="visually-hidden">Loading...</span>
    //         </div>
    //     )
    // }



    return (
        <AuthContext.Provider value={{ currentUser }} >
            {
                props.children
            }
        </AuthContext.Provider>
    )
}