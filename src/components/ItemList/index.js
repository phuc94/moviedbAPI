import ItemCard from '../ItemCard';
import './itemList.css';

const ItemList = ({ itemList }) => {
  return (
    <div className='itemList__wrapper'>
      <p className='itemList__cap'>New Release</p>
      <div className='itemList'>
        {itemList.map((item) => (
          <ItemCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default ItemList;
