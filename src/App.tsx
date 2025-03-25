import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { loadPosts, Post } from './utils/loadPosts';
import "./styles.css";
import BlogPost from './pages/BlogPost';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadPosts().then((loadedPosts) => {
      console.log('Loaded posts:', loadedPosts); // Debug log
      setPosts(loadedPosts);
    });
  }, []);

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs posts={posts} />} />
        <Route path="/blog/:slug" element={<BlogPost posts={posts} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} /> {/* Optional: Catch-all route */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
