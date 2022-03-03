const PicsReducer = (state, action) => {
  switch (action.type) {
    case 'NEW-RESULT':
      return { ...state, images:action.payload };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SEARCH_RESULT': 
      return { ...state, images: action.payload };
    case 'SET_LOADER':
      return { ...state, loader: action.payload };
    case 'NEXT_PAGE':
      return { ...state, page: state.page + 1 };
    case 'CLEAR':
      return { ...state, images: [], data: [] };
    default:
      return state;
  }
};

export default PicsReducer;
