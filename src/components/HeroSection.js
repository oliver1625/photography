import React from 'react'

function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-introduction flex">
            <h2>
                Oliver Dahal <br />
                Photography
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                minima assumenda expedita similique quaerat maiores ab, itaque hic
                explicabo eaque!
            </p>
            <a href="#gallery">Gallery</a>
            </div>
            <div className="hero-images">
            <img
                className="hero-patan"
                src={require('../img/Gokarna/Basantapur L.jpg')}
                alt="picture of elena joy"
            />
            </div>
        </section>
    )
}

export default HeroSection