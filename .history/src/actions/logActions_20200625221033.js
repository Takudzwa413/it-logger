import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG } from "./types";

// Get Log From the server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.responce.data,
    });
  }
};

//ADD NEW LOG
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.responce.data,
    });
  }
};

//Delete Logs from the server

export const deleteLog = () => async (dispatch) => {
    try {
      setLoading();
      await fetch(`/logs/${id}`.{
          method:'DELETE'
      });
      
      
  
      dispatch({
        type: DELETE_LOG,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.responce.data,
      });
    }
  };

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
