import React from "react";
import butty from "../../../assets/img/products/butty.webp";
import chebshebsa from "../../../assets/img/products/chechebsa.webp";
import coca from "../../../assets/img/products/coca.jpg";

const Product = () => {
  return (
    <div className=" mt-[630px] md:mt-[450px]">
      <div class="product-section mt-150 mb-150">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="section-title">
                <h3 className=" font-extrabold">
                  <span class="orange-text">Our</span> Products
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, fuga quas itaque eveniet beatae optio.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 text-center">
              <div class="single-product-item">
                <div class="product-image">
                  <a href="single-product.html">
                    <img className=" h-[220px]" src={butty} alt="" />
                  </a>
                </div>
                <h3>Erteb</h3>
                <p class="product-price">
                  <span>Per Bred</span> 40 ETB{" "}
                </p>
                <a href="cart.html" class="cart-btn">
                  <i class="fas fa-shopping-cart"></i> Add to Cart
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 text-center">
              <div class="single-product-item">
                <div class="product-image">
                  <a href="single-product.html">
                    <img className=" h-[220px]" src={chebshebsa} alt="" />
                  </a>
                </div>
                <h3>ChebChebsa</h3>
                <p class="product-price">
                  <span>Per plate</span> 60 ETB{" "}
                </p>
                <a href="cart.html" class="cart-btn">
                  <i class="fas fa-shopping-cart"></i> Add to Cart
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
              <div class="single-product-item">
                <div class="product-image">
                  <a href="single-product.html">
                    <img
                      className=" h-[220px]"
                      src={coca}
                      alt=""
                    />
                  </a>
                </div>
                <h3>Coca</h3>
                <p class="product-price">
                  <span>Per liter</span> 100 ETB{" "}
                </p>
                <a href="cart.html" class="cart-btn">
                  <i class="fas fa-shopping-cart"></i> Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
