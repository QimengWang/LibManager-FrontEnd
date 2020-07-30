import axios from "axios";

//普通用户:
export function userLogin(user, status) {
  return axios.post("/api/v1/enter", {
    id: user.id,
    pwd: user.pwd,
    status: status
  });
}

export function getAreas() {
  return axios.get("/api/v1/appointment");
}

export function getSeats(data) {
  return axios.get(`/api/v1/1/A?floor=${data[0]}&area=${data[1]}`);
}

export function getTime(data, seat) {
  return axios.get(
    `/api/v1/1/A/8?floor=${data[0]}&area=${data[1]}&seat=${seat}`
  );
}

export function orderSeat(data) {
  return axios.post("/api/v1/appointment/seat", data);
}
