import React from 'react'
import {Link} from 'react-router-dom'
import bg from '../img/Gokarna/undraw_moments_0y20.svg'

function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-introduction flex">
            <img
                className="bg-hero"
                src={bg}
                alt=""
            />
                <h2>    
                    A Photography Gallery <br />
                    
                </h2>
                <p>
                    Create Your Own Gallery by adding your best pictures you have taken <br />
                    Just Login and Continue
                </p>
                <Link to="/login">LOGIN TO CREATE</Link>
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