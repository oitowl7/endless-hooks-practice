import './header.css';

function Header() {
  return(
    <div className="header-container teal-color grey-background">
      <a href="https://www.dictionary.com/browse/endless" target="_blank">
        <img src="/images/logo-endless.svg" alt="logo" className="header-logo filter-teal"/>
      </a>
    </div>
  )
}

export default Header;