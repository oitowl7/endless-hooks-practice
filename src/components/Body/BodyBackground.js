function BodyBackground() {
  // const url = `${process.env.ENVIRONMENT === 'local' ? '/images/' : "./images/"}photo-couch_2x.jpg`
  
  const url = `/images/photo-couch_2x.jpg`
  return(
    <div className="body-img-container">
      <img src={url} alt="logo" className="body-background"/>
    </div>
  )
}

export default BodyBackground;