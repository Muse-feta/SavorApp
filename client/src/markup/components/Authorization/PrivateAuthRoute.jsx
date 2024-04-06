import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";


const PrivateAuthRoute = ({roles, children}) => {

    const [isAuthorized, setIsAuthorized] = useState(false)
    const [isCheckd, setIsChecked] = useState(false)
    const isLogin = useSelector((state) => state.auth.isLogin);
    const {user} = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin) {
          setIsChecked(true);
          if (roles.includes(user?.role)) {
            setIsAuthorized(true);
          }
        } else {
          setIsChecked(true); // Ensure setIsChecked is set even if not logged in
          navigate("/login"); // Navigate to login if not logged in
        }
        
    },[roles])

    if (!isCheckd) {
      if (!isAuthorized) {
        return navigate("/unauthorized");
      }
    }

    
  return children
}

export default PrivateAuthRoute