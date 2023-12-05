import { useContext, useRef } from 'react';
import { DBContext } from '../context/DBContext';
import { useNavigate, useParams } from 'react-router-dom';
import { ProjectItem } from '../components/ProjectItem';
import '../styles/project.css';

export function ProjectPage() {
  const { id } = useParams();
  const { projects } = useContext(DBContext);
  const navigate = useNavigate();
  let imgRef = useRef();

  const currentProject = projects.find((project) => project.id === +id);

  function openPopup(src) {
    imgRef.current = src;
    const popup = document.querySelector('.popup');
    popup.classList.add('popup_active');

    const img = document.createElement('img');
    img.src = imgRef.current;
    img.alt = 'project image';

    popup.insertAdjacentElement('afterbegin', img);

    document.documentElement.style.overflow = 'hidden';
  }

  function closePopup() {
    const popup = document.querySelector('.popup');
    popup.innerHTML = '';
    popup.classList.remove('popup_active');
    document.documentElement.style.overflow = '';
  }

  return (
    <div className='project'>
      <button className='btn pink lighten-2' onClick={() => navigate('/')}>
        На главную
      </button>
      <h1>{currentProject.title}</h1>
      <div>{currentProject.fullDescr}</div>

      <a href={currentProject.linkToRepo} target='_blank'>
        Ссылка на гитхаб репозиторий
      </a>
      <a href={currentProject.linkToProject} target='_blank'>
        Ссылка на проект
      </a>

      <div className='popup' onClick={closePopup}></div>

      {currentProject.imgArray.map((item, index) => (
        <ProjectItem
          key={index}
          img={item}
          descr={currentProject.imgDescrArray[index]}
          openPopup={openPopup}
        />
      ))}
      <div className='project__buttons'>
        {+id === 1 ? null : (
          <button
            className='btn pink lighten-2'
            onClick={() => navigate(`/projects/${+id - 1}`)}
          >
            Предыдущий проект
          </button>
        )}
        {+id === projects.length ? null : (
          <button
            className='btn pink lighten-2'
            onClick={() => navigate(`/projects/${+id + 1}`)}
          >
            Следующтй проект
          </button>
        )}
      </div>
    </div>
  );
}
