import {useState, useEffect} from 'react';
import React from 'react';
import {getTimestamp} from './timestampServiceUtil';

const Timestamp = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = async () => {
      const t = await getTimestamp();
      setTime(t.timestamp);

      // // the statement above is same as
      // getTimestamp().then(t => setTime(t.timestamp));
    };
    const timerRefresh = setInterval(
      () => tick(), 500);

    return function cleanup() {
      clearInterval(timerRefresh);
    };
  });

  return (
    <div className="clock">
      <div className="screen">
        <h1 className="time">{time}</h1>
      </div>
    </div>
  );
};

export default Timestamp;
