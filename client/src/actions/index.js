export const getEntries = () => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });
    const response = await fetch("/entries");
    const entries = await response.json();
    dispatch({ type: "SET_ENTRIES", entries });
  };
};

export const addEntry = (attributes, history) => {
  return async (dispatch) => {
    const response = await fetch("/entries", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: attributes.title,
        content: attributes.content,
        did_exercise: attributes.didExercise,
        did_read: attributes.didRead,
      }),
    });

    const entry = await response.json();
    dispatch({ type: "ADD_ENTRY", entry });
    history.push("/entries");
  };
};

//create an addLike action that POSTs to an entries likes
//dispatch an action ADD_LIKE

export const deleteEntry = (entry) => {
  return async (dispatch) => {
    await fetch(`/entries/${entry.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    dispatch({ type: "DELETE_ENTRY", payload: entry });
  };
};
