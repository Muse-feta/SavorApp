import React from 'react'
import LoginForm from '../components/Login/LoginForm'
import LoginTopBanner from '../components/Login/LoginTopBanner'
import LoginLeftColumn from '../components/Login/LoginLeftColumn'

const Login = () => {
  return (
    <div className="">
      <LoginTopBanner />
        <LoginForm />
    </div>
  );
}

export default Login