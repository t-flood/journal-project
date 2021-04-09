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
    case "ADD_ENTRY":
      return {
        ...state,
        entries: [...state.entries, action.entry],
      };
    default:
      return state;
  }
};

export default entriesReducer;
