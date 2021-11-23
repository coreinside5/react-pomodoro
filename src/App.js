import Break from './components/Break';
import Session from './components/Session';
import React, { useState } from 'react';
import TimeLeft from './components/TimeLeft';
import './App.css';

function App() {
  const [sessionLength, setSessionLength] = useState (60*5);

    const decrementSessionLengthByOneMinute = () => {
        const newSessionLength = sessionLength - 60;

        if (newSessionLength  < 0){
            setSessionLength(0);
        } else {
            setSessionLength(newSessionLength);
        }
        
    }
    const incrementSessionLengthByOneMinute = () => {
        setSessionLength(sessionLength + 60);
    }

    const [breakLength, setBreakLength] = useState (300);

    const decrementBreakLengthByOneMinute = () => {
        const newBreakLength = breakLength - 60;

        if (newBreakLength  < 0){
            setBreakLength(0);
        } else {
            setBreakLength(newBreakLength);
        }
        
    }
    const incrementBreakLengthByOneMinute = () => {
        setBreakLength(breakLength + 60);
    }
  return (
    <div className="App">
      <Break 
      breakLength = {breakLength}
      incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
      decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
      />
      <TimeLeft sessionLength={sessionLength}  breaklength={breakLength} setSessionLength={setSessionLength} />
      <Session 
      sessionLength = {sessionLength}
      incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
      decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
      />
    </div>
  );
}

export default App;
