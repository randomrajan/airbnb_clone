import React from "react";
//import katiezaferes from './katiezaferes.png'
//import star from './star.png'

export default function Card(prop){
    return(
        <div className="card">
            <img src={prop.image}  className="card-image"/>
            <div className="card-stats">
                <img src={prop.star} alt='star' className="card-star"/>
                <span>{prop.rating}</span>
                <span className="gray"> {prop.amount} </span>
                <span className="gray"> {prop.dot} </span>
                <span className="gray"> {prop.country} </span>
            </div>
            <p>{prop.title}</p>
            <p><span className="bold">{prop.money} </span>/ person</p>
        </div>
    )
}