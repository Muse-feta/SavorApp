import React from 'react'

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
                    <a href="contact.html" class="bordered-btn">
                      Contact Us
                    </a>
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