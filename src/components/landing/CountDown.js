import React, { useState, useEffect } from 'react'

const endDate = new Date('2 Sep 2019');

const calDiff = dt => {

    const diff = endDate.getTime() - dt.getTime();

    if(diff <= 0) {
        return []
    }

    const time = diff / 1000;

    return [
        Math.floor(time) % 60,
        Math.floor(time / 60) % 60,
        Math.floor(time / 3600) % 24,
        Math.floor(time / 86400)
    ]
}

const twoString = num => num < 10 ? `0${num}` : num;

const CountDown = () => {

    const [time, setTime] = useState(calDiff(new Date()));

    const timeLength = time.length;

    useEffect(() => {
        let id = setInterval(() => {
            setTime(calDiff(new Date()))
        }, 1000)
        return () => {
            clearInterval(id);
        }
    }, [timeLength])

    if(timeLength === 0) {
        return (
            <div className="pt-5 pb-5">
                <h2 className="f-700">CONTEST CLOSED</h2>
                <h4>Results on world tourism day 27 September 2019</h4>
            </div>
        )
    }
    const [sec, min, hrs, days] = time;
    return (
        <div className="pt-5 pb-5">
            <div className="flex-center f-18 mb-3">
                <div>
                    <div className="countdown">{twoString(days)}</div>
                    <div>day</div>
                </div>
                <div className="countdown-divider"> : </div>
                <div>
                    <div className="countdown">{twoString(hrs)}</div>
                    <div>hour</div>
                </div>
                <div className="countdown-divider"> : </div>
                <div>
                    <div className="countdown">{twoString(min)} </div>
                    <div>min</div>
                </div>
                <div className="countdown-divider"> : </div>
                <div>
                    <div className="countdown">{twoString(sec)}</div>
                    <div>sec</div>
                </div>
            </div>
            <h5>Submission Deadline</h5>
        </div>
    )
}

export default CountDown
