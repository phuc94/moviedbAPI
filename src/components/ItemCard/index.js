import { useNavigate } from 'react-router-dom';
import './itemcard.css';

const ItemCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`movie/${data.id}`);
  };

  return (
    <div className='itemCard' onClick={handleClick}>
      <img
        className='itemCard__backdrop'
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        alt=''
      />
      <div className='itemCard__info'>
        <p className='itemCard__title'>{data.original_title}</p>
        <div className='itemCard__description'>
          <p className='itemCard__overview'>{data.overview}</p>
          <p>Release: {data.release_date}</p>
          <p>
            Rate: {data.vote_average} / {data.vote_count}
          </p>
          <p>Popularity: {Math.floor(data.popularity)}</p>
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
