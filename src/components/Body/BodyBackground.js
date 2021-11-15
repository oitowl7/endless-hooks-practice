function BodyBackground() {
  const url = `${process.env.REACT_APP_IMG_PREFIX ? process.env.REACT_APP_IMG_PREFIX : "./images/"}photo-couch_2x.jpg`
  return(
    <div className="body-img-container">
      <img src={url} alt="logo" className="body-background"/>
    </div>
  )
}

export default BodyBackground;