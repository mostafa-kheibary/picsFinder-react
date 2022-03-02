import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PicsContextProvider } from './context/picsContext';
import Home from './pages/Home/Home';
import Header from './Layouts/Header/Header';
import About from './pages/About/About';
import Search from './pages/Search/Search';
import './App.css';
const App = () => {
  return (
    <BrowserRouter>
      <PicsContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='search/:text' element={<Search />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </PicsContextProvider>
    </BrowserRouter>
  );
};

export default App;
