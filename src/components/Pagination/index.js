import { useDispatch, useSelector } from 'react-redux';
import './pagination.css';
import { fetchAll } from '../Home/homeSlice';

const Pagination = () => {
  const total = useSelector((state) => state.home?.data?.total_pages);
  const current = useSelector((state) => state.home?.data?.page);
  const dispatch = useDispatch();

  const handleClick = (page) => {
    if (page == current) return;
    document.getElementById('new-release').scrollIntoView();
    dispatch(fetchAll(page));
  };

  return (
    <div className='pagination'>
      {Array(total)
        .fill(undefined)
        .map((item, index) => (
          <span
            key={index}
            onClick={(_) => handleClick(index + 1)}
            className={
              index + 1 == current ? 'pagination__current' : ''
            }
          >
            {index + 1}
          </span>
        ))}
    </div>
  );
};
export default Pagination;
