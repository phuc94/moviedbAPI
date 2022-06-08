import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './searchBar.css';
import SearchResult from './SearchResult';

const SearchBar = () => {
  const filterOptions = [
    {
      label: 'Title',
      value: 'title',
    },
    {
      label: 'Language',
      value: 'original_language',
    },
    {
      label: 'Rating',
      value: 'vote_average',
    },
  ];
  const ref = useRef();
  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = useState(filterOptions[0].value);
  const [isShow, setIsShow] = useState(false);
  const [resultList, setResultList] = useState([]);
  const movies = useSelector((state) => state.home?.data?.results);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsShow(false);
        setResultList([]);
        setKeyword('');
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    let result;
    if (keyword.length < 1) return;
    switch (filter) {
      case 'vote_average':
        result = movies.filter(
          (movie) => movie[`${filter}`] >= keyword
        );
        break;
      default:
        result = movies.filter((movie) =>
          movie[`${filter}`]
            .toLowerCase()
            .includes(keyword.toLowerCase())
        );
        break;
    }

    setResultList(result);
    setIsShow(true);
  };

  return (
    <form
      ref={ref}
      className='search'
      onSubmit={(e) => handleSearch(e)}
    >
      <div className='search__group'>
        <input
          className='search__input'
          type='text'
          placeholder='Search in this page...'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button hidden type='submit'></button>
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          className='search__options'
        >
          {filterOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <SearchResult
        isShow={isShow}
        setIsShow={setIsShow}
        resultList={resultList}
      />
    </form>
  );
};
export default SearchBar;
