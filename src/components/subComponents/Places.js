import React from 'react'
import { Link } from 'react-router-dom';
import './Places.css'

function Places(props) {
    return (
            <div className="place">
                <div className="place_img"><img src={props.src} alt="travel"/></div>
                <Link to={props.path} className="link"><div className="details">{props.title}</div></Link>
            </div>
    )
}

export default Places;
