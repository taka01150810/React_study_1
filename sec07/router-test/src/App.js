import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Information from './pages/Information';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      {/*<Link>か<NavLink>を使うとページの一部を更新する */}
      {/* NavLinkはactiveクラスがつく */}
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/information">Information</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      {/* <a>タグだと画面全体を更新 */}
      <a href="information">aタグです</a>
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
