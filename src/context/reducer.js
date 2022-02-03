export const initialState = {
  navToggled: false,
};

export const actionTypes = {
  TOGGLE_NAV: "TOGGLE_NAV",
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
    default:
      return state;
  }
};

export default reducer;
