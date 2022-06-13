import { useNavigate } from 'react-router-dom';
import './searchResult.css';

const SearchResult = (props) => {
  const navigate = useNavigate();

  const handleOnClick = (id) => {
    navigate(`/movie/${id}`);
    props.setIsShow(false);
    props.setKeyword('');
  };

  return (
    <>
      {props.isShow && props.resultList.length == 0 && (
        <div className='searchResult'>
          <p className='searchResult__empty'>No result found!</p>
        </div>
      )}

      {props.isShow && props.resultList.length > 0 && (
        <div className='searchResult'>
          {props.resultList.map((movie) => (
            <div
              key={movie.id}
              className='searchResult__item'
              onClick={(_) => handleOnClick(movie.id)}
            >
              <div className='searchResult__poster'>
                <img
                  loading='lazy'
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=''
                />
              </div>
              <div className='searchResult__info'>
                <p className='searchResult__title'>
                  {movie.original_title}
                </p>
                <p>{movie.release_date}</p>
                <p>
                  Rate: {movie.vote_average} / {movie.vote_count}
                </p>
                <p>Popularity: {movie.popularity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default SearchResult;
