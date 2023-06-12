const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

const showTime = () => {
  const time = new Date();

  let hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hours = hours > 12 ? (hours -= 12) : hours;

  hourHand.style.transform = `translateY(-50%) rotate(${
    hours * 30 + minutes / 2
  }deg)`;
  minuteHand.style.transform = `translateY(-50%) rotate(${
    minutes * 6 + seconds / 10
  }deg)`;
  secondHand.style.transform = `translateY(-50%) rotate(${seconds * 6}deg)`;
};
showTime();

setInterval(showTime, 1000);
