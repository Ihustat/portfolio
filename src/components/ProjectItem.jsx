export function ProjectItem({ img, descr, openPopup }) {
  return (
    <div className='project__line'>
      <img
        className='project__img'
        src={`/${img}`}
        alt='project slide'
        onClick={() => {
          openPopup(`/${img}`);
        }}
      />
      <div className='project__descr'>{descr}</div>
    </div>
  );
}
