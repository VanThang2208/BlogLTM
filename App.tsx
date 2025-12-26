
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bai-viet" element={<Blog />} />
            <Route path="/bai-viet/:id" element={<PostDetail />} />
            <Route path="/gioi-thieu" element={<About />} />
            <Route path="/chung-chi" element={<Certificates />} />
            <Route path="/lien-he" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
