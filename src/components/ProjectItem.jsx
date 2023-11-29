export function ProjectItem({ img, descr }) {
  return (
    <div className='project__line'>
      <img className='project__img' src={img} alt='project slide' />
      <div className='project__descr'>{descr}</div>
    </div>
  );
}
