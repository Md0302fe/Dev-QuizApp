import axios from "../utils/axiosCustomize";

// (F) : POST create user to database.
const postCreateUser = (email, password, username, role, image) => {
  // use axios post data
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);

  return axios.post("api/v1/participant", data);
};

// (F) : PUT Update user to database.
const putUpdate = (id, username, role, image) => {
  // sử dụng dạng body trong post main
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("api/v1/participant", data);
};

// (F) : GET  user from database.
const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};

// (F) : DELETE  user by database.
const deleteUser = (user) => {
  // sử dụng dạng x-www-form-urlencoded : dạng object { data : { ... code sent} }
  return axios.delete("api/v1/participant", { data: { id: user.id } });
};

// (F) : GET  user with paginate.
const getUserWithPaginate = (page, limit) => {
  // sử dụng dạng x-www-form-urlencoded : dạng object { data : { ... code sent} }
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

export {
  postCreateUser,
  getAllUsers,
  putUpdate,
  deleteUser,
  getUserWithPaginate,
};
