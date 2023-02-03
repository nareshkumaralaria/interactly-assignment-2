import React from 'react'
import { useParams } from 'react-router-dom';
import gif1 from '../assets/gif1.gif'
import gif2 from '../assets/gif2.gif'

const Share = () => {
    const { id } = useParams();
    const gif = id === '1' ? gif1 : gif2;
    // const gif = id === '1' ? 'https://interactly-images.s3.ap-south-1.amazonaws.com/temp/1.gif' : 'https://interactly-images.s3.ap-south-1.amazonaws.com/temp/2.gif';
    return (
        <div className='img-div'>
            <img src={gif} alt="Shareable Gif" />
        </div>
    )
}

export default Share