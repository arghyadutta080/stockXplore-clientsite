
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Video from './components/Video';
import Main from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import GuidePage from './pages/GuidePage';
function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<Video />} />
    <Route exact path='/main' element={<Main />} />
    <Route exact path='/about' element={<AboutPage />} />
    <Route exact path='/guide' element={<GuidePage />} />
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
