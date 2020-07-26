import axios from "axios";

//普通用户:
export function userLogin(user, status) {
  return axios.post("/api/v1/enter", {
    id: user.id,
    pwd: user.pwd,
    status: status
  });
}
