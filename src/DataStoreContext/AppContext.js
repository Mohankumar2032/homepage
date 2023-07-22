let localMovies = [];

export let initialState = {
  list: [],
  text: ""
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "MoviesList": {
      return {
        ...state,
        list: action.payload
      };
    }
    case "OnChangeTxt": {
      return {
        ...state,
        text: action.payload
      };
    }

    default:
      return state;
  }
};
