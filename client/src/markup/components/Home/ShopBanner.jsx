import React from 'react'


const ShopBanner = () => {
  return (
    <div className=" mb-[90px] mt-[-40px]">
      <section class="bg-image_shop">
        <div class="container p-[70px]">
          <h3 className=" font-extrabold text-5xl">
            December sale is on! <br /> with big{" "}
            <span className=" text-[#df3030]">Discount...</span>
          </h3>
          <div class="sale-percent mt-7">
            <span className=" text-5xl ">
              Sale! <br /> Upto
            </span>
            <span className=" text-[#df3030] font-extrabold ml-3 text-5xl">
              50%
            </span>{" "}
            <span className=" text-2xl font-extrabold">off</span>
          </div>
          <div className="mt-7">
            <a className="" href="shop.html" class="cart-btn btn-lg">
              Shop Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShopBanner