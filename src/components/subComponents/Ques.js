import React from 'react'
import './Ques.css'

function Ques(props) {
    return (
            <div className="ques">
                <div className="face face1">
                    <h2 className="text">to visit</h2>
                    <p>{props.content}</p>
                </div>
                <div className="face face2">
                    <h2>{props.title}</h2>
                </div>
            </div>
    )
}

export default Ques
