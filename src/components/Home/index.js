import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from '../ItemList';
import Trending from '../Trending';
import { fetchAll } from './homeSlice';

const Home = () => {
  const dispatch = useDispatch();
  const home = useSelector((state) => state.home);
  const [trending, setTrending] = useState({});
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  useEffect(() => {
    if (home.data === undefined) return;
    setTrending({
      imgUrl: home.data.backdrop_path,
      id: home.data.id,
      description: home.data.description,
      name: home.data.name,
      runtime: home.data.runtime,
    });
    setItemList(home.data.results);
  }, [home]);

  return (
    <div>
      {home && (
        <>
          <Trending trending={trending} />
          <ItemList itemList={itemList} />
        </>
      )}
    </div>
  );
};
export default Home;
