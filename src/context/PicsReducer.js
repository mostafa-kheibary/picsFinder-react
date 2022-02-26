const PicsReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_RESULT':
      return {...state,images:action.payload}
    default:
      return state;
  }
};

export default PicsReducer;