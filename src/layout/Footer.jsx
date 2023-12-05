import '../styles/nav.css';

export function Footer() {
  return (
    <footer className='page-footer'>
      <ul className='nav'>
        <li>
          <a className='nav__link' href='https://t.me/Ihustat' target='_blank'>
            <img
              className='header__icon'
              src='/img/social/telegram.svg'
              alt='telegram'
            />
            @Ihustat
          </a>
        </li>
        <li>
          <a
            className='nav__link'
            href='https://wa.clck.bar/79298330891'
            target='_blank'
          >
            <img
              className='header__icon'
              src='/img/social/whatsapp.svg'
              alt='whatsapp'
            />
            WhatsApp
          </a>
        </li>
        <li>
          <a className='nav__link' href='tel:+79298330891'>
            <img
              className='header__icon'
              src='/img/social/phone.svg'
              alt='phone'
            />
            +7 (929) 833 08 91
          </a>
        </li>
      </ul>
    </footer>
  );
}
