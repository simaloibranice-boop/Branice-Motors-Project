import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Parts from './pages/Parts';
import About from './pages/About'; 
import Dealers from './pages/Dealers';

function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/parts' element={<Parts />} />
    <Route path='/about' element={<About />} />
    <Route path='/login' element={<Login />} />
    <Route path='/dealers' element={<Dealers />} />
    </Routes>
    </div>
    <Footer />
     </div>
    </BrowserRouter>
  );
}

export default App;
