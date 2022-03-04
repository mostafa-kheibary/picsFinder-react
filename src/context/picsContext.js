import { createContext, useReducer } from 'react';
import PicsReducer from './PicsReducer';
import getData from '../API/unsplash';
import getRandom from '../API/randomUnsplash';
const PicsContext = createContext();

const PicsContextProvider = ({ children }) => {
  const initialState = {
    data: [],
    images: [],
    page: 2,
    loader: false,
    modalShow: false,
  };
  const [state, dispatch] = useReducer(PicsReducer, initialState);
  // search image with the giben text
  const search = async (text) => {
    dispatch({
      type: 'SET_LOADER',
      payload: true,
    });
    const data = await getData(
      `/search/photos?query=${text}&per_page=10&page=${1}`
    );
    dispatch({
      type: 'SEARCH_RESULT',
      payload: data.results,
    });
    dispatch({
      type: 'SET_DATA',
      payload: data,
    });
    dispatch({
      type: 'SET_LOADER',
      payload: false,
    });
  };
  // load random image
  const loadRandom = async () => {
    dispatch({
      type: 'SET_LOADER',
      payload: true,
    });
    const data = await getRandom(30);
    dispatch({
      type: 'NEW-RESULT',
      payload: data,
    });
    dispatch({
      type: 'SET_LOADER',
      payload: false,
    });
  };
  const clear = () => {
    dispatch({
      type: 'CLEAR',
    });
  };
  const changeModal = () => {
    dispatch({
      type: 'SET_MODAL',
    });
  };
  const nextPage = async () => {
    dispatch({
      type: 'NEXT_PAGE',
    });
    const data = await getData(
      `search/photos?query=${state.resultOf}`,
      state.page
    );
    dispatch({
      type: 'NEW_RESUALT',
      payload: data,
    });
  };
  return (
    <PicsContext.Provider
      value={{
        state,
        search,
        nextPage,
        loadRandom,
        clear,
        changeModal,
      }}
    >
      {children}
    </PicsContext.Provider>
  );
};
export { PicsContextProvider };
export default PicsContext;
