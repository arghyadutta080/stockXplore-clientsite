
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import GuidePage from './pages/GuidePage';

import HomePage from './pages/HomePage';
function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<HomePage />} />
    <Route exact path='/main' element={<MainPage />} />
    <Route exact path='/about' element={<AboutPage />} />
    <Route exact path='/guide' element={<GuidePage />} />
    </Routes>
    
    </BrowserRouter>
   </div>
  );
}

export default App;
