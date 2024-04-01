import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { decodeToken } from "../features/auth/authSlice";


const getAuth = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  if (token) {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  }

  return null;
};

export default getAuth;
