import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Banner = () => {
  const { user } = useSelector((state) => state.auth);
  const isLogin = useSelector((state) => state.auth.isLogin);
  // console.log(user.username)
  return (
    <div className=" h-[600px]">
      <div className="hero-area bg-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 offset-lg-2 text-center">
              <div className="hero-text">
                <div className="hero-text-tablecell">
                  {isLogin ? (
                    <div>
                      <p className="subtitle">Welcome {user?.username}</p>
                      <h1>Fresh and Organic</h1>
                    </div>
                  ) : (
                    <div>
                      <p className="subtitle">Fresh and Organic</p>
                      <h1>Savour</h1>
                    </div>
                  )}
                  <div className="hero-btns">
                    <a href="shop.html" className="boxed-btn">
                      Fruit Collection
                    </a>
                    <Link to="/admin/dashbored" className="bordered-btn">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner