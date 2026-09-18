import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { BooksProvider } from './BooksContext';
import NotFound from './components/NotFound';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import SecretBooks from './components/SecretBooks';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <BooksProvider>

      <Router>
        <Routes>
          <Route path="/" element={<Books></Books>}></Route>
          <Route path="/books" element={<Navigate to="/" />}></Route>
          <Route
            path="/books/:bookId"
            element={<BookDetails></BookDetails>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route
            path="/secret"
            element={<PrivateRoute Component={<SecretBooks />} />}
          ></Route>
        </Routes>
      </Router >

    </BooksProvider >
  );
}

export default App;
