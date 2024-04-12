import React from 'react'

const Online_Payement = () => {
  return (
    <div>
      <div className="md:w-8/12 lg:ml-6 lg:w-[500px] my-5">
        <form>
          <div className="flex outline-none border-l-4 border-[#f4a53e] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
            <div className=" mt-[6px] opacity-[30%] mr-2 ">
              {<FcCurrencyExchange />}
            </div>

            <select
              className="outline-none  bg-[#f7f7f7] md:w-[480px]"
              // onChange={handleChange}
              // value={employeeData.company_role_id}
              name="company_role_id"
            >
              <option value={1}>ETB</option>
              <option value={2}>Dollar</option>
              <option value={3}>Euro</option>
              <option value={3}>Pound</option>
              <option value={3}>Yen</option>
            </select>
          </div>

          <div className="flex outline-none border-l-4 border-[#f4a53e] p-4 bg-[#f7f7f7] py-3 px-3 mb-3 w-[100%] sm:w-[100%]">
            <div className=" mt-[6px] opacity-[30%] mr-2">
              {<FaBlenderPhone />}
            </div>

            <input
              className="outline-none  bg-[#f7f7f7] "
              type="text"
              name="phone_number"
              placeholder="Phone Number"
              // value={form.username}
              // onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="inline-block w-full rounded bg-[#f4a53e] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Online_Payement