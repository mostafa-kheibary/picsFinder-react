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
  };
  const [state, dispatch] = useReducer(PicsReducer, initialState);
  // search image with the giben text
  const search = async (text) => {
    dispatch({
      type: 'SET_LOADER',
      payload: true,
    });
    const data = await getData(`search/photos?query=${text}`, 1);
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
    const data = await getRandom(30);
    console.log(data);
    dispatch({
      type: 'NEW-RESULT',
      payload: data,
    });
  };
  const clear = () => {
    dispatch({
      type: 'CLEAR',
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
        data: state.data,
        state,
        search,
        nextPage,
        loadRandom,
        clear,
      }}
    >
      {children}
    </PicsContext.Provider>
  );
};
export { PicsContextProvider };
export default PicsContext;
