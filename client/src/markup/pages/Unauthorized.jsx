import React from 'react'
import UnauthorizedBanner from '../components/UnAuthorized/UnauthorizedBanner';
import UnauthorizedComponent from '../components/UnAuthorized/UnauthorizedComponent';

const Unauthorized = () => {
  return (
    <div>
      <UnauthorizedBanner/>
      {/* <UnauthorizedComponent/> */}
    </div>
  );
}

export default Unauthorized