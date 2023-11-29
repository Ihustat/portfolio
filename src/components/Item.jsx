import { useRef } from 'react';
import '../styles/item.css';

export function Item({ img, title, descr, link }) {
  const backRef = useRef(null);
  function showBack() {
    backRef.current.classList.add('active');
  }

  function hideBack() {
    backRef.current.classList.remove('active');
  }

  return (
    <div className='card' onMouseEnter={showBack} onMouseLeave={hideBack}>
      <div className='card-image'>
        <div className='back' ref={backRef}>
          <a href='#' className='back__link'>
            Show project Descr
          </a>
          <a href='#' className='back__link'>
            Show project
          </a>
        </div>
        <img src={img} alt={title} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{title}</span>
        <p>{descr}</p>
      </div>
    </div>
  );
}
