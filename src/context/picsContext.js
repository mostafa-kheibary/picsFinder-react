import { createContext, useReducer, useState } from 'react';
import PicsReducer from './PicsReducer';
import getData from '../API/unsplash';
const PicsContext = createContext();

const PicsContextProvider = ({ children }) => {
  const initialState = {
    images: [],
    page: 1,
    loader: false,
  };
  const [state, dispatch] = useReducer(PicsReducer, initialState);
  const [text, setText] = useState('');
  const search = async (text) => {
    setText(text);
    dispatch({
      type: 'SET_LOADER',
      payload: true,
    });
    const data = await getData(`search/photos?query=${text}`, state.page);
    dispatch({
      type: 'SET_LOADER',
      payload: false,
    });
    dispatch({
      type: 'SEARCH_RESULT',
      payload: data.results,
    });
  };

  const nextPage = async () => {
    dispatch({
      type: 'NEXT_PAGE',
    });
    const data = await getData(`search/photos?query=${text}`, state.page);
    dispatch({
      type: 'NEW_RESUALT',
      payload: data.results,
    });
    console.log(data);
  };
  return (
    <PicsContext.Provider
      value={{
        state,
        search,
        nextPage,
      }}
    >
      {children}
    </PicsContext.Provider>
  );
};
export { PicsContextProvider };
export default PicsContext;
