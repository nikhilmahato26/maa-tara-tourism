import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Navbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import FloatingButtons from './components/FloatingButtons/FloatingButtons';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-slate-900 bg-slate-50 min-h-screen flex flex-col">
        <header>
          <Topbar />
          <Navbar />
        </header>
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;
