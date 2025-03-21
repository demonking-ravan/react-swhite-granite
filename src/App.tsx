import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Factory from './pages/Factory';
import Header from './components/Header';
import "./styles.css";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/factory" element={<Factory />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} /> {/* Optional: Catch-all route */}
      </Routes>
    </>
  )
}

export default App
