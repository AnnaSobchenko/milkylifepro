import axios from "axios";
axios.defaults.baseURL = "https://milkylifepro-rest-api.herokuapp.com/";
// axios.defaults.baseURL = "http://localhost:3001/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export async function signinUserApi(userData) {
  const { data } = await axios.post("/api/users/login", userData);
  token.set(data.ResponseBody.token);
  return data.ResponseBody;
}

export async function signupUserApi(userData) {
  await axios.post("/api/users/signup", userData);
  const { name, email, phone, password } = userData;
  const data = signinUserApi({
    name,
    email,
    phone,
    password,
  });
  return data;
}

export async function logoutUserApi(persistedToken) {
  token.set(persistedToken);
  const { data } = await axios.get("/api/users/logout", persistedToken);
  token.unset();
  return data;
}

export async function getUserInfo(accessToken) {
  if (accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
  }
  const userInfo = await axios.get("api/users/current");
  return { email: userInfo.email };
}

export async function refreshUserTokenApi({ persistedToken }) {
  token.set(persistedToken);
  const { data } = await axios.get("/api/users/refresh", persistedToken);

  return data;
}
export async function getAllUsersApi() {
  const { data } = await axios.get("/api/users");
  return data;
}

export async function delUserByIdApi(id) {
  await axios.delete(`/api/users/${id}`, id);
  return;
}

export async function getPricesApi() {
  const  {data}  = await axios.get("/api/prices");
  return data;
}