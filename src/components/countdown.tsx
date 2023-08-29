import { useEffect, useState } from "react";

interface TimerProps {
  dateTime: string;
}

const Countdown = ({ dateTime }: TimerProps) => {
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "00",
    countdownHours: "00",
    countdownMinutes: "00",
    countdownSeconds: "00",
  });

  const [expiryTime, setExpiryTime] = useState(dateTime);
  const [countdownEnded, setCountdownEnded] = useState(false);

  function myTimer() {
    const countdownDateTime = new Date(expiryTime).getTime();
    const currentTime = new Date().getTime();

    const remainingDayTime = countdownDateTime - currentTime;

    let totalDays = Math.floor(
      remainingDayTime / (1000 * 60 * 60 * 24),
    ).toString();
    let totalHours = Math.floor(
      (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    ).toString();
    let totalMinutes = Math.floor(
      (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60),
    ).toString();
    let totalSeconds = Math.floor(
      (remainingDayTime % (1000 * 60)) / 1000,
    ).toString();

    if (parseInt(totalDays) >= 0 && parseInt(totalDays) <= 9) {
      totalDays = `0${totalDays}`;
    }

    if (parseInt(totalHours) >= 0 && parseInt(totalHours) <= 9) {
      totalHours = `0${totalHours}`;
    }

    if (parseInt(totalMinutes) >= 0 && parseInt(totalMinutes) <= 9) {
      totalMinutes = `0${totalMinutes}`;
    }

    if (parseInt(totalSeconds) >= 0 && parseInt(totalSeconds) <= 9) {
      totalSeconds = `0${totalSeconds}`;
    }

    if (remainingDayTime < 0) {
      clearTimeout(timeInterval);
      setCountdownEnded(true);
    }

    const runningCountdownTime = {
      countdownDays: totalDays.toString(),
      countdownHours: totalHours.toString(),
      countdownMinutes: totalMinutes.toString(),
      countdownSeconds: totalSeconds.toString(),
    };

    setCountdownTime(runningCountdownTime);
  }

  // const countdownTimer = () => {
  // };

  // useEffect(() => {
  // 	countdownTimer();
  // }, []);

  useEffect(() => {
    clearTimeout(timeInterval);
    setExpiryTime(dateTime);

    const countdownDateTime = new Date(dateTime).getTime();
    const currentTime = new Date().getTime();

    const remainingDayTime = countdownDateTime - currentTime;

    if (remainingDayTime < 0) {
      setCountdownEnded(true);
    } else {
      setCountdownEnded(false);
    }
  }, [dateTime]);

  const timeInterval = setTimeout(myTimer, 1000);

  return (
    <div className="w-[509px] ">
      {countdownEnded && (
        <div className="grid grid-flow-col gap-[12px] text-center auto-cols-max m-5">
          Timer Ended
        </div>
      )}

      {!countdownEnded && (
        <div className="grid grid-flow-col gap-[12px] text-center auto-cols-max m-5">
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              {countdownTime.countdownDays}
            </span>
            days
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              {countdownTime.countdownHours}
            </span>
            hours
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              {countdownTime.countdownMinutes}
            </span>
            min
          </div>
          <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              {countdownTime.countdownSeconds}
            </span>
            sec
          </div>
        </div>
      )}
    </div>
  );
};

export default Countdown;
