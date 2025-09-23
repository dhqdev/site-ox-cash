import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set event date (3 days from now for demo)
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 3);
    eventDate.setHours(20, 0, 0, 0); // 20:00h

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="bg-gradient-card border border-border rounded-2xl p-6 mt-8">
      <p className="text-center text-muted-foreground mb-4">O evento começa em:</p>
      <div className="flex justify-center gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-gradient-gold">
            {formatNumber(timeLeft.days)}
          </div>
          <div className="text-sm text-muted-foreground">Dias</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gradient-gold">
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="text-sm text-muted-foreground">Horas</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gradient-gold">
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="text-sm text-muted-foreground">Minutos</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gradient-gold">
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="text-sm text-muted-foreground">Segundos</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;