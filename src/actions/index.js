import axios from "axios";
import { url } from "../api/index";
import {
  CREATED_SUCCESSFULLY,
  // CREATION_FAILED,
  CHECK_REF_CODE,
  REF_CODE_ERROR,
  USERNAME_ERROR,
  // CLEAR_DATA,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  VERIFIED_USER,
  UNVERIFIED_USER,
  CHECK_REF_CODE_AS_LINK,
  REF_CODE_ERROR_AS_LINK,
} from "../constants/actionTypes";

// import setAuthToken from "../utils/setAuthToken";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const validRefCodeAsLink = (refCode) => async (dispatch) => {
  try {
    const res = await axios.get(`${url}/public/issues/links/${refCode}`);
    dispatch({
      type: CHECK_REF_CODE_AS_LINK,
      payload: res.data,
    });
  } catch (error) {
    const { message } = error.response.data;
    dispatch({
      type: REF_CODE_ERROR_AS_LINK,
      payload: message,
    });
  }
};

export const validRefCodeAsInvite = (refCode) => async (dispatch) => {
  try {
    const res = await axios.get(`${url}/public/invites/${refCode}`);

    dispatch({
      type: CHECK_REF_CODE,
      payload: res.data,
    });
  } catch (error) {
    const { message } = error.response.data;
    dispatch({
      type: REF_CODE_ERROR,
      payload: message,
    });
  }
};

export const createTemporaryUser = (username, refCode) => async (dispatch) => {
  const formattedUsername = username.replace("+", " ").replace(/\s+/g, "");
  try {
    const res = await axios.post(
      `${url}/public/users/${formattedUsername}/${refCode}`
    );
    dispatch({
      type: CREATED_SUCCESSFULLY,
      payload: res.data,
    });
  } catch (error) {
    const data = error.response;
    dispatch({
      type: USERNAME_ERROR,
      payload: data,
    });
  }
};

export const verifyUser = (username) => async (dispatch) => {
  const formattedUsername = username.replace("+", " ").replace(/\s+/g, "");

  try {
    const res = await axios.post(
      `${url}/public/users/${formattedUsername}/opt`
    );

    dispatch({
      type: VERIFIED_USER,
      payload: res.data,
    });
  } catch (error) {
    const { message } = error.response.data;

    dispatch({
      type: UNVERIFIED_USER,
      payload: message,
    });
  }
};

export const register = (username, values) => async (dispatch) => {
  try {
    const password = Object.values(values).join("") + "";

    const body = JSON.stringify({ username, password });

    const res = await axios.post(`${url}/public/users/login`, body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const { message } = error.response.data;

    dispatch({
      type: AUTH_ERROR,
      payload: message,
    });
  }
};
