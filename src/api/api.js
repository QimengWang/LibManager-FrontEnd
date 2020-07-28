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

export function orderSeat() {
  return axios.post("/api/v1/appointment/seat", {
    id: "00010001",
    floor: 1,
    area: "A",
    seat: 9,
    data: "2020-01-01",
    start: "08:00:00",
    end: "12:30:00"
  });
}
