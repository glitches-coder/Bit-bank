import React from 'react';
import './card.styles.scss';
import HomePage from '../../pages/homepage.component';

const Card = ({id, title, content}) => (
    <div className = 'card-holder'>
        <div className='card-title'>
            {title.toUpperCase()}
        </div>
        <div className='card-content'>
            <p className='content'>
                {content}
            </p>
        </div>
        <div className='btn-holder'>
        <button className='more-info-button'>Know more</button>
        </div>
        

    </div>
)

export default Card;