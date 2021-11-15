import './header.css';

function Header() {
  const image_url = `${process.env.REACT_APP_IMG_PREFIX ? process.env.REACT_APP_IMG_PREFIX : "./images/"}logo-endless.svg`
  return(
    <div className="header-container teal-color grey-background">
      <a href="https://www.dictionary.com/browse/endless" target="_blank">
        <img src={image_url} alt="logo" className="header-logo filter-teal"/>
      </a>
    </div>
  )
}

export default Header;