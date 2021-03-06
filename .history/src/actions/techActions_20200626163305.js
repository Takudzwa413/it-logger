import { GET_TECHS, DELETE_TECH, TECHS_ERROR, SET_LOADING } from "./types";

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.responce.statusText,
    });
  }
};

//SET LOADING TO TRUE

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
