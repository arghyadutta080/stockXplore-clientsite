
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Video from './components/Video';
import Main from './pages/MainPage';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<Video />} />
    <Route exact path='/main' element={<Main />} />
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
