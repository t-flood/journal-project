export const getEntries = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch("http://localhost:3001/entries")
      .then((resp) => resp.json())
      .then((entries) => dispatch({ type: "SET_ENTRIES", entries }));
  };
};

export const addEntry = (entry, history) => {
  return (dispatch) => {
    fetch("http://localhost:3001/entries", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ entry }),
    })
      .then((resp) => resp.json())
      .then((entry) => {
        dispatch({ type: "ADD_ENTRY", entry });
        history.push("/entries");
      });
  };
};
