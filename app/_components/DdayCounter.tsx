'use client';
import { useEffect, useState } from 'react';

const DdayCounter = () => {
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    const deadline = new Date();
    deadline.setDate(10);
    deadline.setHours(0, 0, 0, 0);

    if (currentDate.getDate() > 10) {
      if (currentMonth === 11) {
        deadline.setFullYear(deadline.getFullYear() + 1);
        deadline.setMonth(0);
      } else {
        deadline.setMonth(currentMonth + 1);
      }
    }
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance: number = deadline.getTime() - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      setLoading(false);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="text-center w-screen font-bold">
          <span className="text-2xl">월급날까지</span>
          <div className="mt-3 p-4 bg-white bg-opacity-50 w-full">
            <div className="text-4xl">
              {days}일 {hours}시간 {minutes}분 {seconds}초
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DdayCounter;
