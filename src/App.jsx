/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './route/index.js';

import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        {publicRoutes.map((route, index) => {
          const Pages = route.component;
          return <Route key={index} path={route.path} element={<Pages />} />;
        })}
      </Routes>
      <Footer />
    </div>
  );
}
