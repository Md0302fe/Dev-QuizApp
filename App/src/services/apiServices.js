import axios from "../utils/axiosCustomize";

// (F) : post create user to database.
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

export { postCreateUser };
