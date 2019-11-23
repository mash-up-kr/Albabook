export const LOGIN_REQUEST = 'SOCIAL_LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'SOCIAL_LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'SOCIAL_LOGIN_FAILURE';
export const LOGOUT = 'SOCIAL_LOGOUT';

export const loginRequest = (payload = {}) => ({
  type: LOGIN_REQUEST,
  payload,
});
export const loginSuccess = (payload = {}) => ({
  type: LOGIN_SUCCESS,
  payload,
});
export const loginFailure = (payload = {}) => ({
  type: LOGIN_FAILURE,
  payload,
});
export const logout = (payload = {}) => ({
  type: LOGOUT,
  payload,
});
