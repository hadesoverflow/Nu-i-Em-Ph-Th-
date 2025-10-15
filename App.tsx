import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Media from './pages/Media';
import Finance from './pages/Finance';
import About from './pages/About';
import Donate from './pages/Donate';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-white text-gray-800">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tulieu" element={<Media />} />
            <Route path="/taichinh" element={<Finance />} />
            <Route path="/gioithieu" element={<About />} />
            <Route path="/donggop" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;