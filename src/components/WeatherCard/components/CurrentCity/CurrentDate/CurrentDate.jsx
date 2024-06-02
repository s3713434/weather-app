import React, { useState, useEffect } from 'react';

export default function CurrentDate({ className }) {
  const [dateTime, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = dateTime.getDate();
  const month = dateTime.toLocaleString('en-US', { month: 'long' });
  const weekday = dateTime.toLocaleString('en-US', { weekday: 'long' });
  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');

  const formattedDate = `${date} ${month}, ${weekday} ${hours}:${minutes}`;

  return (
    <div className={className}>
      {formattedDate}
    </div>
  );
}
