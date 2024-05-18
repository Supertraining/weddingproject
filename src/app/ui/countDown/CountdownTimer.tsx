"use client"
import { useState, useEffect } from 'react';
import { herr_Von_Muellerhoff } from '../fonts';

type timeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownTimer = ({ targetDate, className }: { targetDate: string, className: string }) => {

  const calculateTimeLeft = () => {

    const targetDateTime: any = new Date(targetDate)

    const now = Date.now();
    const difference = targetDateTime - now;

    let timeLeft: timeLeft;


    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft!;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        setTimeLeft(calculateTimeLeft());
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className={`${className} ${herr_Von_Muellerhoff.className}`}>
      {timeLeft?.days} días {addLeadingZero(timeLeft?.hours)}:{addLeadingZero(timeLeft?.minutes)}:{addLeadingZero(timeLeft?.seconds)}
    </div>
  );
};

export default CountdownTimer;