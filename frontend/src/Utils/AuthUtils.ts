import { jwtDecode } from 'jwt-decode';
import { redirect } from 'react-router-dom';

interface DecodedToken {
  userId: string,
  role: string,
}

export const setToken = (token: string) => {
  if (!token) throw new Error("No token provided")

  sessionStorage.setItem("jwt_token", token);
}

export const getToken = () => {
  const token = sessionStorage.getItem("jwt_token");
  if (!token) throw new Error("No token provided")
  return token;
}

export const removeToken = () => {
  sessionStorage.removeItem("jwt_token");
  redirect('/')
}

export const parseToken = () => {
  const token = getToken();
  if (!token) throw new Error("No token provided");
  return jwtDecode<DecodedToken>(token);
};

export const getRole = (): string => parseToken().role;