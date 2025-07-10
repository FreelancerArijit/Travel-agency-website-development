import React from 'react'
import TogglerButton from "./TogglerButton"
import { NavLink } from 'react-router-dom'


function DetailedCard({ name, description, image, price, duration, location, highlights }) {
    return (
        <>
            <div className="detailedcard">
                <div className="detailedcard-img">
                    <img src={image} alt="" className="src" />

                </div>
                <div className="detailedcardtext">
                    
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <span><strong>Price:</strong> {price} | <strong>Duration:</strong>{duration}</span>
                    <p>{location}</p>
                    <p>{highlights}</p>
                  <NavLink to="tel:7865095895"><TogglerButton text="Call now to book" /> </NavLink>

                </div>
            </div>

        </>
    )
}

export default DetailedCard
