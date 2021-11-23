import moment from 'moment';
import React from 'react';
import './Break.css';

const Break = ({
    breakLength,
    decrementBreakLengthByOneMinute,
    incrementBreakLengthByOneMinute,
}) => {
    
    const breakLengthInMinutes = moment.duration(breakLength, 's').minutes();
    return (
        <div>
            <p id="break-label">Pomotimer</p>
            <p id="break-label">{breakLengthInMinutes}</p>
            <button id="break-decrement" className="decrease" onClick={decrementBreakLengthByOneMinute}>-</button>
            <button id="break-increment" className="increase" onClick={incrementBreakLengthByOneMinute}>+</button>
        </div>
        
    )
}

export default Break
