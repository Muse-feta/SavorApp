import React from 'react'
import login from "../../../assets/img/login_bg.png";

const LoginLeftColumn = () => {
  return (
    <div>
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-8/12">
        <img
          src={login}
          className="w-full h-[150px] md:h-[480px]"
          alt="Phone image"
        />
      </div>
    </div>
  );
}

export default LoginLeftColumn