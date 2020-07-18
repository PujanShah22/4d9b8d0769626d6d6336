const InitialState = {
  data: null,
  isLoading: false,
};

export const HomeReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'SEARCH_ASTEROID':
      return {...state, data: null, isLoading: action.isLoading};

    case 'SEARCH_ASTEROID_SUCCESS':
      return {...state, data: action.data, isLoading: false};

    default:
      break;
  }
  return state;
};
