import './tredning.css';

const Trending = ({ trending }) => {
  return (
    <div className='trending'>
      <img
        loading='lazy'
        className='trending__backdrop'
        src={`https://image.tmdb.org/t/p/original${trending.imgUrl}`}
        alt=''
      />
      <div className='trending__info'>
        <div>
          <p className='trending__now'>Trending Now</p>
          <p className='trending__title'>{trending.name}</p>
          <p className='trending__description'>
            {trending.description}
          </p>
          <p className='trending__runtime'>
            Runtime: {Math.floor(trending.runtime / 60)} minutes
          </p>
        </div>
      </div>
    </div>
  );
};
export default Trending;
