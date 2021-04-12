export const getEntries = () => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });
    const response = await fetch("http://localhost:3001/entries");
    const entries = await response.json();
    dispatch({ type: "SET_ENTRIES", entries });
  };
};

export const addEntry = (entry, history) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3001/entries", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ entry }),
    });

    const entry = await response.json();
    dispatch({ type: "ADD_ENTRY", entry });
    history.push("/entries");
  };
};

export const deleteEntry = (entry) => {
  return async (dispatch) => {
    await fetch(`http://localhost:3001/entries/${entry.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    dispatch({ type: "DELETE_ENTRY", payload: entry });
  };
};
