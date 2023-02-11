import React from 'react'
import { useNavigate } from 'react-router-dom';
import { lottieNotFound } from '../LottieAnimations/lottieData'
import LottieAnimation from '../LottieAnimations'
import './style.css';
const EmptyViewComponent = () => {
    const navigate = useNavigate();
    return (
    <div className='goBack'>
        <h1> Error Nothing Found</h1>
        <LottieAnimation file={lottieNotFound} width='500px' height='500px' />
            <button onClick={()=>navigate('/')}> Go Back</button>
        </div>
    )
}

export default EmptyViewComponent