import { useContext } from 'react';
import { DBContext } from '../context/DBContext';
import { useNavigate, useParams } from 'react-router-dom';
import { ProjectItem } from '../components/ProjectItem';
import '../styles/project.css';

export function ProjectPage() {
  const { id } = useParams();
  const { projects } = useContext(DBContext);
  const navigate = useNavigate();
  const currentProject = projects.find((project) => project.id === +id);

  return (
    <div className='project'>
      <h1>{currentProject.title}</h1>
      {currentProject.imgArray.map((item, index) => (
        <ProjectItem
          key={index}
          img={item}
          descr={currentProject.imgDescrArray[index]}
        />
      ))}
      <div className='project__buttons'>
        {+id === 1 ? null : (
          <button
            className='btn'
            onClick={() => navigate(`/projects/${+id - 1}`)}
          >
            Prev project
          </button>
        )}
        {+id === projects.length ? null : (
          <button
            className='btn'
            onClick={() => navigate(`/projects/${+id + 1}`)}
          >
            Next project
          </button>
        )}
      </div>
    </div>
  );
}
