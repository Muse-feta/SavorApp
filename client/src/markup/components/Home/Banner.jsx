import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Banner = () => {
  const { user } = useSelector((state) => state.auth);
  const isLogin = useSelector((state) => state.auth.isLogin);
  // console.log(user.username)
  return (
    <div className=" h-[600px]">
      <div class="hero-area bg-image">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 offset-lg-2 text-center">
              <div class="hero-text">
                <div class="hero-text-tablecell">
                  {isLogin ? (
                    <div>
                      <p class="subtitle">Welcome {user?.username}</p>
                      <h1>Fresh and Organic</h1>
                    </div>
                  ) : (
                    <div>
                      <p class="subtitle">Fresh and Organic</p>
                      <h1>Savour</h1>
                    </div>
                  )}
                  <div class="hero-btns">
                    <a href="shop.html" class="boxed-btn">
                      Fruit Collection
                    </a>
                    <Link to="/admin/dashbored" class="bordered-btn">
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