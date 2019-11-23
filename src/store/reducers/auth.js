import auth from '../actions';

const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case auth.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case auth.LOGOUT:
      return {
        ...state,
        user: initialState.user,
      };
    default:
      return state;
  }
};
