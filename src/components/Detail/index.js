import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './detail.css';

const Detail = () => {
  const { movieId } = useParams();
  const data = useSelector((state) =>
    state.home.data.results.find((movie) => movie.id == movieId)
  );

  return (
    <div className='detail'>
      <div className='detail__backdrop'>
        <img
          loading='lazy'
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt=''
        />
      </div>
      <div className='detail__info'>
        <div className='detail__poster'>
          <img
            loading='lazy'
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt=''
          />
        </div>
        <div className='detail__description'>
          <p className='detail__title'>{data.title}</p>
          <p className='detail__overview'>{data.overview}</p>
          <p className='detail__release'>
            Release: {data.release_date}
          </p>
          <p className='detail__average'>
            Rate: {data.vote_average} / {data.vote_count}
          </p>
          <p className='detail__popularity'>
            Popularity: {Math.floor(data.popularity)}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Detail;
