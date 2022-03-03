import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PicsContextProvider } from './context/picsContext';
import Home from './pages/Home/Home';
import Header from './Layouts/Header/Header';
import About from './pages/About/About';
import SearchPage from './pages/Search/SearchPage';
import NotFound from './pages/NoteFound/NotFound';
import Pics from './pages/Pics/Pics';
import './App.css';
const App = () => {
  return (
    <BrowserRouter>
      <PicsContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='search/:text' element={<SearchPage />} />
          <Route path='photo/:id' element={<Pics />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </PicsContextProvider>
    </BrowserRouter>
  );
};

export default App;
