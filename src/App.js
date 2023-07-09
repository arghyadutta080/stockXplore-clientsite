
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Video from './components/Video';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<Video />} />
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
