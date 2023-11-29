import { Item } from './Item';

export function ItemsList({ items = [] }) {
  return (
    <>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </>
  );
}
