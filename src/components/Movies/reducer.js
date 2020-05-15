const initialState = {
  dataFilm: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH": {
      return {
        ...state,
        dataFilm: action.payload.data,
      };
    }
    default:
      return state;
  }
};
