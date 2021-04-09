const initialState = {
  entries: [],
  loading: true,
};

const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_ENTRIES":
      return {
        ...state,
        loading: false,
        entries: action.entries,
      };
    default:
      return state;
  }
};

export default entriesReducer;
