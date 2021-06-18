const initialState = {
  entries: [],
  loading: true,
};

function replace(entries, entry) {
  const result = [...entries];
  const index = entries.findIndex((e) => e.id === entry.id);

  if (index === -1) {
    result.push(entry);
  } else {
    result[index] = entry;
  }

  return result;
}

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
    case "GET_ENTRY":
    case "ADD_ENTRY":
    case "UPDATE_ENTRY":
      return {
        ...state,
        entries: replace(state.entries, action.entry),
      };
    case "DELETE_ENTRY":
      return {
        ...state,
        entries: state.entries.filter(
          (entry) => entry.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default entriesReducer;
