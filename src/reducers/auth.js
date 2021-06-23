import {
  CREATED_SUCCESSFULLY,
  // USER_IS_AUTHENTICATED,
  REF_CODE_ERROR,
  CHECK_REF_CODE,
  USERNAME_ERROR,
  // CLEAR_DATA,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  VERIFIED_USER,
  UNVERIFIED_USER,
  CHECK_REF_CODE_AS_LINK,
  REF_CODE_ERROR_AS_LINK,
} from "../constants/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  data: null,
  otp: null,
  isVerifiedUsername: null,
  isAuthenticated: null,
  isRefCodeValid: null,
  isRefCodeValidAsLink: null,
  errorMessage: null,
  isUsernameExist: null,
  loading: false,
  status: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATED_SUCCESSFULLY:
      return {
        ...state,
        data: payload,
        isVerifiedUsername: true,
      };
    case USERNAME_ERROR:
      return {
        ...state,
        isVerifiedUsername: false,
        isUsernameExist: true,
        status: payload.status
      };
    case REF_CODE_ERROR:
      return {
        ...state,
        isRefCodeValid: false,
        errorMessage: payload,
      };
    case CHECK_REF_CODE:
      return {
        ...state,
        isRefCodeValid: true,
        data: payload,
      };
    case CHECK_REF_CODE_AS_LINK:
      return {
        ...state,
        isRefCodeValidAsLink: true,
        data: payload,
      };
    case REF_CODE_ERROR_AS_LINK:
      return {
        ...state,
        isRefCodeValidAsLink: false,
        data: payload,
      };
    case VERIFIED_USER:
      return {
        ...state,
        isVerifiedUsername: true,
      };
    case UNVERIFIED_USER:
      return {
        ...state,
        isVerifiedUsername: false,
        errorMessage: payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};
