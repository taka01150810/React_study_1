import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Information from './pages/Information';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  // 認証していたら表示、していなかったらリダイレクトする
  const isAuthenticated = false

  return (
    <>
      {/* Routesで切り替えたいRouteを囲む */}
      <Routes>
        {/* Routeでコンポーネントを指定することができる */}
        {/* ※ver5ではRoutesではなくSwitchを使用する */}
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={isAuthenticated ? <Navigate to="/contact" /> : <Home /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
