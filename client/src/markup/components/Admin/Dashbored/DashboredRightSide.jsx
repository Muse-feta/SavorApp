import React from 'react'

const DashboredRightSide = () => {
  return (
    <div className=" p-2 md:p-12">
      <div className=" md:flex  ustify-center items-center gap-5 lg:ml-[100px]">
        <div className=" bg-[#3b76ef] text-center p-[50px] w-[250px]  md:w-[300px]  font-extrabold font-mono text-white rounded-2xl my-3 flex justify-center items-center">
          <div>
            <h1 className=" text-white text-xl">Total Income</h1>
            <br />
            <h1 className=" text-3xl text-white">1550 ETB.</h1>
          </div>
        </div>

        <div className=" bg-[#4a95f5] text-center p-[50px] w-[250px] md:w-[300px]   font-extrabold font-mono text-white rounded-2xl">
          <h1 className=" text-white text-xl">Net Profit Margin</h1>
          <br />
          <h1 className=" text-3xl text-white">550 ETB.</h1>
        </div>
      </div>

      <div className=" md:flex justify-center items-center gap-5 lg:ml-[100px] mt-4">
        <div className=" bg-[#a66dd4] text-center  p-[50px] w-[250px] md:w-[300px] mb-3 font-extrabold font-mono text-white rounded-2xl">
          <h1 className=" text-white text-xl">Best Selling Product</h1>
          <br />
          <h1 className=" text-3xl text-white">Special Erteb</h1>
        </div>

        <div className=" bg-[#64c4bc] text-center p-[50px] w-[250px] md:w-[300px]   font-extrabold font-mono text-white rounded-2xl">
          <h1 className=" text-white text-xl">Total Users</h1>
          <br />
          <h1 className=" text-3xl text-white">23</h1>
        </div>
      </div>
    </div>
  );
}

export default DashboredRightSide