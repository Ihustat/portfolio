import { useRef } from 'react';
import '../styles/item.css';
import { Link } from 'react-router-dom';

export function Item({ imgArray, title, descr, id, linkToProject }) {
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
          <Link to={`/projects/${id}`} className='back__link'>
            Показть описание
          </Link>
          <Link to={linkToProject} target='_blank' className='back__link'>
            Смотреть проект
          </Link>
        </div>
        <img src={imgArray[0]} alt={title} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{title}</span>
        <p>{descr}</p>
      </div>
    </div>
  );
}
