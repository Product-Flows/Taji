import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import GamesPreview from './pages/Games/GamesPreview';
import Category from './pages/Category/Category';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Terms from './pages/Terms/Terms';
import Dmca from './pages/Dmca/Dmca';
import Tag from './pages/Tag/Tag';
import Blog from './pages/Blog/Blog';
import BlogPreview from './pages/Blog/BlogPreview';

function App() {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:name" element={<BlogPreview />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/tag/:name" element={<Tag />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/DMCA" element={<Dmca />} />
            <Route path="/game/:name" element={<GamesPreview />} />
            <Route path="/category/:category" component={Category} />
          </Route>
          {/* <Route path="/game/:name" element={<GamesPreview />} /> */}
        </Routes>
      </BrowserRouter>

    </div >
  )
}

export default App