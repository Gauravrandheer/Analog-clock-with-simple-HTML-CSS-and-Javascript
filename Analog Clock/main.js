const secondhand = document.querySelector('.second-hand');
const minutehand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();
  const secondsdegree = ((second/60)*360)+90;
  const minutedegree = ((minute/60)*360)+90;
  const hourdegree = ((hour/12)*360)+90;
  secondhand.style.transform = `rotate(${secondsdegree}deg)`
  minutehand.style.transform = `rotate(${minutedegree}deg)`
  hourhand.style.transform = `rotate(${hourdegree}deg)`
  console.log(hour);

}
setInterval(setDate, 1000);
