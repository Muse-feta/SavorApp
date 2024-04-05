import { jwtDecode } from "jwt-decode";


const getAuth = () => {
  const token = localStorage.getItem("token");

  if (token) {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  }

  return null;
};

export default getAuth;
