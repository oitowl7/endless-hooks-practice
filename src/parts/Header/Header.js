import './header.css';

function Header() {
  const image_url = `./images/logo-endless.svg`
  return(
    <div className="header-container teal-color grey-background">
      <a href="https://www.dictionary.com/browse/endless" target="_blank">
        <img src={image_url} alt="logo" className="header-logo filter-teal"/>
      </a>
    </div>
  )
}

export default Header;