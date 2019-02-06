export const post = payload => {
  return {
    type: "POST",
    payload: payload
  };
};

export const destroy = payload => {
  return {
    type: "DELETE",
    payload: payload
  };
};

export const editPlayer = payload => {
  console.log("edit player payload", payload);
  return {
    type: "PUT",
    payload: payload
  };
};

export const editFill = payload => {
  console.log("editfill payload", payload);
  return {
    type: "PATCH",
    payload: payload
  };
};

export const savingApiDataToReduxState = payload => {
  console.log("get action payload", payload);
  return {
    type: "GET",
    payload: payload.results
  };
};
