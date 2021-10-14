import * as types from "./constants";
import api from "../services/api";

const requestApiStart = () => {
  return {
    type: types.API_REQUEST_START,
  };
};

const requestApiEnd = () => {
  return {
    type: types.API_REQUEST_END,
  };
};

const requestApiSuccess = () => {
  return {
    type: types.API_DATA_SUCCESS,
  };
};

const requestApiFailed = () => {
  return {
    type: types.API_DATA_FAILURE,
  };
};

const setTask = (task) => {
  return {
    type: types.GET_TASK,
    task,
  };
};

const setTasks = (tasks) => {
  return {
    type: types.GET_TASKS,
    tasks,
  };
};

const removeTask = () => {
  return {
    type: types.REMOVE_TASK,
  };
};

const createTask = () => {
  return {
    type: types.CREATE_TASK,
  };
};

const updateTask = () => {
  return {
    type: types.UPDATE_TASK,
  };
};

export function persistTask(task) {
  return async (dispatch) => {
    try {
      dispatch(requestApiStart());
      let res = null;
      if (task.hasOwnProperty("id")) {
        res = await api.update(task);
        dispatch(updateTask());
      } else {
        res = await api.add(task);
        dispatch(createTask());
      }

      if (res.status >= 400) {
        dispatch(requestApiFailed());
        return;
      }

      dispatch(requestApiSuccess());
      dispatch(requestApiEnd());
      dispatch(findTasks());
    } catch (err) {
      console.log(err);
      dispatch(requestApiFailed());
      dispatch(requestApiEnd());
    }
  };
}

export function findTask(id) {
  return async (dispatch) => {
    try {
      dispatch(requestApiStart());
      const res = await api.get(id);

      if (res.status >= 400) {
        dispatch(requestApiFailed());
        return;
      }

      const json = await res.json();
      dispatch(setTask(json.data));

      dispatch(requestApiSuccess());
      dispatch(requestApiEnd());
    } catch (err) {
      dispatch(requestApiFailed());
      dispatch(requestApiEnd());
    }
  };
}

export function findTasks(page = 1, limit = 100) {
  return async (dispatch) => {
    try {
      dispatch(requestApiStart());
      const res = await api.list(page, limit);

      if (res.status >= 400) {
        dispatch(requestApiFailed());
        return;
      }

      const json = await res.json();
      dispatch(setTasks(json));

      dispatch(requestApiSuccess());
      dispatch(requestApiEnd());
    } catch (err) {
      console.log(err);
      dispatch(requestApiFailed());
      dispatch(requestApiEnd());
    }
  };
}

export function deleteTask(id) {
  return async (dispatch) => {
    try {
      dispatch(requestApiStart());
      const res = await api.remove(id);

      if (res.status >= 400) {
        dispatch(requestApiFailed());
        return;
      }
      dispatch(requestApiSuccess());
      dispatch(requestApiEnd());
      dispatch(removeTask());
      dispatch(findTasks());
    } catch (err) {
      console.log(err);
      dispatch(requestApiFailed());
      dispatch(requestApiEnd());
    }
  };
}

export function changeTask(task) {
  return async (dispatch) => {
    try {
      dispatch(requestApiStart());
      dispatch(setTask(task));
      dispatch(requestApiSuccess());
      dispatch(requestApiEnd());
    } catch (err) {
      dispatch(requestApiFailed());
      dispatch(requestApiEnd());
    }
  };
}
