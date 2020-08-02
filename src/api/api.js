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

export function searchBook(type, bookValue) {
  return axios.post("/api/v1/search/book", {
    type: type,
    value: bookValue
  });
}

export function bookBorrow(userId, bookId) {
  return axios.post("/api/v1/borrow",{
    cid: userId,
    bid: bookId
  });
}

export function listBorrowed(id) {
  return axios.get("/api/v1/list_borrowed_book",{
    params: {
      cid: id
    }
  });
}

export function returnBook(userId, bookId) {
  return axios.post("/api/v1/return_book", {
    cid: userId,
    bid: bookId
  });
}

export function listReturned(id) {
  return axios.get("/api/v1/list_returned_book",{
    params: {
      cid: id
    }
  });
}

export function categoryStatistic(id) {
  return axios.get("/api/v1/client/book/statistic",{
    params: {
      cid: id
    }
  });
}

export function timeStatistic(id) {
  return axios.get("/api/v1/client/book_num/statistic", {
    params: {
      cid: id
    }
  });
}

export function getUserInfo(id) {
  return axios.get("/api/v1/client", {
    params: {
      cid: id
    }
  });
}

export function changePwd(id, formPwd) {
  return axios.post("/api/v1/client/change_pwd",{
    id: id,
    oldPwd: formPwd.pwd,
    newPwd: formPwd.pwdChanged,
    pwdConfirm: formPwd.pwdConfirm
  });
}