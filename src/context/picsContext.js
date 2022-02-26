import { createContext, useReducer } from 'react';
import PicsReducer from './PicsReducer';
import getData from '../API/unsplash';
const PicsContext = createContext();

const PicsContextProvider = ({ children }) => {
  const initialState = {
    images: [],
  };
  const [state, dispatch] = useReducer(PicsReducer, initialState);
  const search = async (text) => {
    const data = await getData(`search/photos?query=${text}`);
    dispatch({
      type: 'SEARCH_RESULT',
      payload: data.results,
    });
  };
  return (
    <PicsContext.Provider
      value={{
        state,
        search,
      }}
    >
      {children}
    </PicsContext.Provider>
  );
};
export { PicsContextProvider };
export default PicsContext;
