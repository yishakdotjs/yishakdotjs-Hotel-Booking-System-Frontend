export const initialState = {
  navToggled: false,
  isLoading: false,
};

export const actionTypes = {
  TOGGLE_NAV: "TOGGLE_NAV",
  LOADING: "LOADING",
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
    default:
      return state;
  }
};

export default reducer;
