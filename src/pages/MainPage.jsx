import { useContext } from 'react';
import { ItemsList } from '../components/ItemsList';
import { DBContext } from '../context/DBContext';

export function MainPage() {
  const { projects } = useContext(DBContext);

  return (
    <div className='main'>
      <ItemsList items={projects} />
    </div>
  );
}
