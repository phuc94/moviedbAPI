import { useState } from 'react';
import './searchBar.css';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {};

  return (
    <form className='search'>
      <input
        className='search__input'
        type='text'
        placeholder='Search...'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        type='button'
        className='search__btn'
        onClick={handleSearch}
      >
        Search
      </button>
    </form>
  );
};
export default SearchBar;
