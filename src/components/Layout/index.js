import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../Detail';
import Footer from '../Footer';
import Header from '../Header';
import Home from '../Home';
import SearchResult from '../SearchResult';
import ToTop from '../ToTop';
import './layout.css';

const Layout = () => {
  return (
    <div className='layout'>
      <BrowserRouter>
        <Header />
        <main className='body'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<SearchResult />} />
            <Route path='/movie' element={<Detail />}>
              <Route path=':movieId' element={<Detail />} />
            </Route>
          </Routes>
        </main>
        <Footer />
        <ToTop />
      </BrowserRouter>
    </div>
  );
};
export default Layout;
