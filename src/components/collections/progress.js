import React from 'react'
import useAnimate from '../../hooks/useAnimate';

const Progress = ({ complete, duration = 3000 }) => {

    const width = useAnimate(!complete, duration);

    return (
        <div className="progress mt-2">
            <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${!complete ? width * 90 : 100}%` }}
            >
            </div>
        </div>
    )
}

export default Progress
