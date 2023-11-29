export function Header() {
  return (
    <nav className=''>
      <div className='nav-wrapper'>
        <a href='#' className='brand-logo'>
          Portfolio
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='#'>Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
