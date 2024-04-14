const api_url = import.meta.env.VITE_API_URL;
const VITE_CHAPA_API_URL = import.meta.env.VITE_CHAPA_API_URL;
const VITE_CHAPA_AUTH_KEY = import.meta.env.VITE_CHAPA_AUTH_KEY;
import axios from "axios";

const checkOut = async (data) => {
    try {
        const response = await axios.post(
            `${api_url}/api/checkout`,
            data
        );
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
// const chapaPayment = async (data) => {
//   const body = {
//     amount: data.order_total_price,
//     currency: data.currency,
//     phone_number: data.phone,
//     tx_ref: data.tx_ref,
//     first_name: data.first_name,
//     last_name: data.last_name,
//     return_url: "http://localhost:5173/",
//   };
//     const header = {
//       headers: {
//         Authorization: `Bearer ${VITE_CHAPA_AUTH_KEY}`,
//         "Content-Type": "application/json",
//       },
//     };
//   try {
//     const response = await axios.post(
//       `${corsAnywhereUrl}${VITE_CHAPA_API_URL}`,
//       body,
//       header
//     );
//     return response;
//   } catch (error) {
//     return error;
// }
// };

const onlineCheckOut = async (data) => {
    try {
        const response = await axios.post(
          `${api_url}/api/online-payment`,
          data
        );
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}
const checkoutService = { checkOut, onlineCheckOut, };
export default checkoutService