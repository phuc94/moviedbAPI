import SearchBar from '../SearchBar';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <nav className='header__nav'>
        <Link to='/'>Home</Link>
      </nav>
      <SearchBar />
    </div>
  );
};
export default Header;
