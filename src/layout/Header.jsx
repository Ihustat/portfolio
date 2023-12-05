import '../styles/nav.css';

export function Header() {
  return (
    <nav>
      <div className='nav-wrapper'>
        <div className='brand-logo'>Danil Gertsog portfolio</div>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='https://t.me/Ihustat' target='_blank'>
              <img
                className='header__icon'
                src='/img/social/telegram.svg'
                alt='telegram'
              />
              @Ihustat
            </a>
          </li>
          <li>
            <a href='https://wa.clck.bar/79298330891' target='_blank'>
              <img
                className='header__icon'
                src='/img/social/whatsapp.svg'
                alt='whatsapp'
              />
              WhatsApp
            </a>
          </li>
          <li>
            <a href='tel:+79298330891'>
              <img
                className='header__icon'
                src='/img/social/phone.svg'
                alt='phone'
              />
              +7 (929) 833 08 91
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
