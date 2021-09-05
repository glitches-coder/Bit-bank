import React from 'react';
import './title.styles.scss';
import  { ReactComponent as BankSvg } from  '../../utils/bank.svg';
import '../../utils/bank.css';
import Particles from 'react-particles-js';


const Title = () => (
   
        <div className='title App'>
            <BankSvg className='bank-img'></BankSvg>
            <div className='control'>
            <p className='holder'>BIT BANK</p>
            <span className='tagline'>Your digital banking experience just got better!</span>
            </div>
        </div>


);

export default Title;