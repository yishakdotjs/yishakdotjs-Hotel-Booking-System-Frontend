export const initialState = {
  navToggled: false,
  isLoading: false,
  isAuth: false,
  accessToken: null,
};

export const actionTypes = {
  TOGGLE_NAV: "TOGGLE_NAV",
  LOADING: "LOADING",
  AUTH: "AUTH",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.TOGGLE_NAV:
      return {
        ...state,
        navToggled: action.navToggled,
      };
      break;
    case actionTypes.LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
      break;
    case actionTypes.AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
        accessToken: action.accessToken,
      };
      break;
    default:
      return state;
  }
};

export default reducer;
