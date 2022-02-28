const PicsReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_RESULT':
      return { ...state, images: action.payload };
    case 'SET_LOADER':
      return { ...state, loader: action.payload };
    case 'NEXT_PAGE':
      return { ...state, page: state.page + 1 };
    case 'NEW_RESUALT' :
      return{...state,images:[...state.images,...action.payload]}
    default:
      return state;
  }
};

export default PicsReducer;
