import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <NavBar />
      <div id='page-body'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/article' element={<ArticleListPage />} />
          <Route path='/article/:articleId' element={<ArticlePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
