const seconds = document.getElementById("second-hand");
const minutes = document.getElementById("minute-hand");
const hours = document.getElementById("hour-hand");
let s;
const clock = () => {
    let now = new Date()
  s = now.getSeconds();
  m = now.getMinutes();
  h = now.getHours();
  const seconddeg = s*6;
  const minutedeg = (m*6) + (s/10);
  const hourdeg = (h*30) + (m/2);
  console.log("second degree is", seconddeg);
  console.log("minute degree is", minutedeg);
  console.log("hour degree is", hourdeg);
  seconds.style.transform = `rotate(${(seconddeg)}deg)`;
  minutes.style.transform = `rotate(${(minutedeg)}deg)`;
  hours.style.transform = `rotate(${(hourdeg)}deg)`;
};
setInterval(clock, 1000);
