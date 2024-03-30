import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";


const getAuth = async () => {
    const dispatch = useDispatch();
  const token = await localStorage.getItem("token");

  if (token) {
    const decodedToken = await jwtDecode(token);
    // dispatch(setCredentials({ user: jwtDecode(token) }));
    return decodedToken;
  }

  return null;
};

export default getAuth;
