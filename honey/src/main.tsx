import { createRoot } from 'react-dom/client'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import './index.css'

import Contact from '../src/pages/Contact.tsx'
import Footer from '../src/components/Footer.tsx'
import Careers from '../src/pages/Careers.tsx'
import AboutUs from '../src/pages/AboutUs.tsx'
import Menu from '../src/pages/Menu.tsx'
import Home from '../src/App.tsx'
import Layout from '../src/layout/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<App />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/home" element={<Home />} />
              </Route>
            </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

