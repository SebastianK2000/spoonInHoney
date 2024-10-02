import { createRoot } from 'react-dom/client'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import './index.css'

import Contact from '../src/pages/Contact.tsx'
import Footer from '../src/components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
            <Routes>
              <Route index element={<App />} />
              <Route path="contact" element={<Contact />} />
              <Route path="footer" element={<Footer />} />
            </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

