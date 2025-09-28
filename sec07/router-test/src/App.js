import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Information from './pages/Information';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Layout from './Layout';
import BookList from './pages/BookList';
import BookIndex from './pages/BookIndex';
import BookDetail from './pages/BookDetail';

function App() {
  // 認証していたら表示、していなかったらリダイレクトする
  const isAuthenticated = false

  return (
    <>
      {/* Routesで切り替えたいRouteを囲む */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={isAuthenticated ? <Navigate to="/contact" /> : <Home /> } />
          <Route path="/book-list" element={<BookList />}>
            <Route index element={<BookIndex/>} />
            <Route path=":id" element={<BookDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
