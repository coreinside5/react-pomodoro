import React, { useEffect, useState } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import './Timeleft.css';


momentDurationFormatSetup(moment);

const TimeLeft = ({breakLength, sessionLength}) => {
    const [currentSessionType, setCurrentSessionType] = useState('Session')
    const [intervalId, setIntervalId] = useState(null)
    const [timeLeft, setTimeLeft ] = useState(sessionLength);
    useEffect(() => {setTimeLeft(sessionLength)}, [sessionLength]);

    const isStarted = intervalId !== null;
    const handleStartStopClic = () => {
        if(isStarted){
            clearInterval(intervalId)
            setIntervalId(null)
        }else {
            const newInterwalId = setInterval(() => {
            setTimeLeft(prevTimeLeft =>{
                const newTimeLeft = prevTimeLeft -1;
                if (newTimeLeft >= 0){
                    return prevTimeLeft -1
                    
                }
                if (currentSessionType === 'Session'){
                        setCurrentSessionType('Break')
                        setTimeLeft(breakLength)
                    } else if (currentSessionType === 'Break'){
                        setCurrentSessionType('Session')
                        setTimeLeft(sessionLength)
                    }
            }
            

            )

        }, 100);
        setIntervalId(newInterwalId);
        }
        
    }
    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', {trim:false});
    return (
        <div>
            {formattedTimeLeft}
            <button onClick={handleStartStopClic}>{isStarted ? "stop" : "start"}</button>
            
        </div>
    )
}

export default TimeLeft
