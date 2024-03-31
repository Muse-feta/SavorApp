import React from 'react'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className=" h-[600px]">
      <div class="hero-area bg-image">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 offset-lg-2 text-center">
              <div class="hero-text">
                <div class="hero-text-tablecell">
                  <p class="subtitle">Fresh & Organic</p>
                  <h1>Farm-Fresh Produce Bliss</h1>
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