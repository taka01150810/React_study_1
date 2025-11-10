import './App.css';
import MuiTest from './pages/MuiTest';
import { Routes, Route } from 'react-router-dom';
import Layout from './common/Layout';
import BookIndex from './pages/books/BookIndex';
import BookDetail from './pages/books/BookDetail';
import BookEdit from './pages/books/BookEdit';
import BookSearch from './pages/books/BookSearch';
import { usePersist } from './hooks/usePersist'

function App() {
  const STORAGE_KEY = 'books'
  const [books, setBooks] = usePersist(STORAGE_KEY)

  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<BookIndex books={books} />} />
        <Route path="search" element={<BookSearch books={books} setBooks={setBooks} />} />
        <Route path="edit" element={<BookEdit />} >
          {/* setBooksで本の情報を更新する */}
          <Route path=":id" element={<BookDetail books={books} setBooks={setBooks}/>} />
        </Route>
        <Route path="mui-test" element={<MuiTest />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
