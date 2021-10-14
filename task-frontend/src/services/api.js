const apiUrl = `${process.env.REACT_APP_API_PATH}/api/v1`;

const add = (o) => {
  return fetch(`${apiUrl}/tasks`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "POST",
    body: JSON.stringify(o),
  });
};

const update = (o) => {
  return fetch(`${apiUrl}/tasks/${o.id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "PUT",
    body: JSON.stringify(o),
  });
};

const remove = (id) => {
  return fetch(`${apiUrl}/tasks/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "DELETE",
  });
};

const get = (id) => {
  return fetch(`${apiUrl}/tasks/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "GET",
  });
};

const list = (page = 1, limit = 900) => {
  return fetch(`${apiUrl}/tasks?page=${page}&size=${limit}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "GET",
  });
};

export default {
  get,
  list,
  update,
  add,
  remove,
};
