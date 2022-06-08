import React from 'react'


function Gallery() {
  return (
    <div className="gallery" id="gallery">
        <header className="gallery-head">
        <h2>Quality Photography</h2>
        <p>My work pictures that I took</p>
        </header>
        <img
        className="gallery1"
        src={require('../img/Gokarna/20200615_171932.jpg')}
        alt="man in suit"
        />
        <img className="gallery2" src={require('../img/Gokarna/Gumba P.jpg')} alt="lady in coat" />
        <img className="gallery3" src={require('../img/Gokarna/Boudha L.jpg')} alt="lady in t-shirt" />
        <img className="gallery4" src={require('../img/Gokarna/Dusk L1.jpg')} alt="lady in jacket" />
  </div>
  )
}

export default Gallery