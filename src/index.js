import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SampleParts from './SampleParts';
import Second from './Second';
import SamplePage from './SamplePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<SamplePage />} />
        <Route path={`/register/`} element={<SampleParts />} />
        <Route path={`/login/`} element={<Second />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
