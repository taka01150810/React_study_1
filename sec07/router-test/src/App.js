import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Information from './pages/Information';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      {/* Routesで切り替えたいRouteを囲む */}
      <Routes>
        {/* Routeでコンポーネントを指定することができる */}
        {/* ※ver5ではRoutesではなくSwitchを使用する */}
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
