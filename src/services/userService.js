import axios from "axios";

const handleLogin = (email, password) => {
  //post dữ liệu người dùng nhập vào về phía server
  return axios.post("http://localhost:8000/api/login", { email, password });
};

const handleResigter = (userName, email, password, roleID) => {
  roleID = 2;
  return axios.post("http://localhost:8000/api/create-new-user", {
    userName,
    email,
    password,
    roleID,
  });
};

export { handleLogin, handleResigter };
