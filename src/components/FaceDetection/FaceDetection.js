import React from 'react';
import './FaceDetection.css';

const FaceDetection = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto' />
                {box.map(boxes => {
                    return <div key={`${boxes.topRow} ${boxes.rightCol} ${boxes.bottomRow} ${boxes.leftCol}`} className='bounding-box' style={{
                        top: boxes.topRow,
                        right: boxes.rightCol,
                        bottom: boxes.bottomRow,
                        left: boxes.leftCol
                    }}>
                    </div>
                })}
            </div>
        </div>
    );
}

export default FaceDetection;