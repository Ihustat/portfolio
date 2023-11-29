import { useState } from 'react';
import { ItemsList } from '../components/ItemsList';

export function MainPage() {
  const [items, setItems] = useState([
    {
      img: 'https://st.hzcdn.com/simgs/pictures/bedrooms/deadwood-forest-home-thompson-photographic-img~bed16b690b3ab113_4-6161-1-1a31511.jpg',
      title: 'Item',
      descr: 'This is descr',
      id: 1,
    },
    {
      img: 'https://st.hzcdn.com/simgs/pictures/bedrooms/deadwood-forest-home-thompson-photographic-img~bed16b690b3ab113_4-6161-1-1a31511.jpg',
      title: 'Item2',
      descr: 'This is descr2',
      id: 2,
    },
  ]);

  return (
    <div className='main'>
      <ItemsList items={items} />
    </div>
  );
}
