import {useState, useEffect} from 'react';
import React from 'react';
import {getTimestamp} from './timestampServiceUtil';
import PropType from 'prop-types'

const Timestamp = (props) => {
  Timestamp.PropType = {
    displayText: PropType.string,
  }

  const [time, setTime] = useState('');
  const [hasLoad, setHasLoad] = useState(false);

  useEffect(() => {
    if (!hasLoad) {
      console.log("Page loading for the first time");
      setHasLoad(true);
    } else {
      console.log("Page re-rendered due to state change");
    }

    const tick = async () => {
      const t = await getTimestamp();
      setTime(t.timestamp);

      /* the statement above is same as
      // getTimestamp().then(t => setTime(t.timestamp));
      */
    };

    const timerRefresh = setInterval(() => tick(), 500);

    /* Optional cleanup function */
    // return function cleanup() {
    //   clearInterval(timerRefresh);
    // };
  }, [time]);

  return (
    <div className="clock">
      <div className="screen">
        <h1 className="time">{time}</h1>
        <p>{props.displayText}</p>
      </div>
    </div>
  );
};

export default Timestamp;
