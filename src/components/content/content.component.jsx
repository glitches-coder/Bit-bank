import React from "react";
import './content.styles.scss'
import Content from "../../pages/Secondary-content/secondary-content.component";

const DataHandler = ({id, title, content, image}) => (
    <div className={`wrapper ${(id % 2) ? 'left' : ''}`}>
        <div className='content-container'>
            <div className='content-head'>{title.toUpperCase()}</div>
            <div className='content-data'>{content}</div> 
        </div>
        <div className='image-container'>
            <img className='img-svg' src= {image} alt="image" />
        </div>
    </div>
)
export default DataHandler;