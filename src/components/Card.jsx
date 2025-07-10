import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({ img, title, description }) {
    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src={img} alt="" className="src" />
                </div>

                <div className="card-title">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>

                <div className="card-btn">
                   <NavLink to="./tour"> <button>
                        Know More
                    </button>
                    </NavLink>
                </div>
            </div>

        </>
    )
}

export default Card
