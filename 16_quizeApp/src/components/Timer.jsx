import React, { useEffect, useState } from 'react'

const Timer = ({ setIsOver, leftTime, setLeftTime }) => {

    const [displayTime, setDisplayTime] = useState('');

    // time left logic
    useEffect(() => {

        const intervalId = setInterval(() => {
            setLeftTime(prev => {
                if (prev <= 0) {
                    clearInterval(intervalId);
                    return 0
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }

    }, [leftTime]);

    // time formating logic
    useEffect(() => {
        if (leftTime === 0) {
            setIsOver(true)
        }
        let time = `${(Math.floor(leftTime / 60)).toString().padStart(2, 0)} : ${(leftTime % 60).toString().padStart(2, 0)}`;

        setDisplayTime(time);

    }, [leftTime, setIsOver])

    return (
        <h1>Time Left : {displayTime}</h1>
    )
}

export default Timer