import React from "react";
import katiezaferes from './katiezaferes.png'
import star from './star.png'

export default function Card(){
    return(
        <div className="card">
            <img src={katiezaferes} alt='katiezaferes' className="card-image"/>
            <div className="card-stats">
                <img src={star} alt='star'/>
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
                <p>Life Lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
            </div>
        </div>
    )
}