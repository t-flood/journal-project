export const getEntries = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch("http://localhost:3001/entries")
      .then((resp) => resp.json())
      .then((entries) => dispatch({ type: "SET_ENTRIES", entries }));
  };
};
