const colors = ['skyBlue', 'red', 'rgba(133, 122, 200)', '#f15025'];

const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  // get random number 0-3
  const randomNum = getRandomNum();
  console.log(randomNum);

  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
});

function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
