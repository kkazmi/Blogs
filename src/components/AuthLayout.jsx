import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function Protected( {children, authentication = true}) {
    /* const {user} = useSelector(state => state.auth)
    const [isAuthenticated, setIsAuthenticated] = useState(false) */
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate()

    const authStatus = useSelector(state => state.auth.status)
    useEffect(() => {
        if(authentication && authStatus !== authentication) {
            navigate("/login")
        }else if (!authentication && authStatus === "authenticated") {
            navigate("/")
        }
        setLoader(false)

    },[authStatus,navigate,authentication])
  return loader ? <h1>Loading...</h1> : {children}
}


