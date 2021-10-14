import {
  API_DATA_SUCCESS,
  API_DATA_FAILURE,
  API_REQUEST_START,
  API_REQUEST_END,
  CREATE_TASK,
  UPDATE_TASK,
  GET_TASK,
  GET_TASKS,
  REMOVE_TASK,
} from "./constants";

const task = {
  description: "",
  active: false,
};

let initialState = {
  loading: false,
  error: false,
  tasks: {
    page: 1,
    limit: 10,
    total: 0,
    data: [],
  },
  task: { ...task },
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case API_REQUEST_START:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case API_REQUEST_END:
      return {
        ...state,
        loading: false,
      };
    case API_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case API_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case UPDATE_TASK:
    case CREATE_TASK:
      return {
        ...state,
        task: { ...task },
      };
    case GET_TASK:
      return {
        ...state,
        task: { ...action.task },
      };
    case GET_TASKS:
      return {
        ...state,
        tasks: { ...action.tasks },
      };
    case REMOVE_TASK:
      return {
        ...state,
        task: { ...task },
      };
    default:
      return state;
  }
}
