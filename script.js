const btn = document.querySelector('button.btn');
const increaseBtn = document.querySelector('button.increase-btn');
const decreaseBtn = document.querySelector('button.decrease-btn');

let fontSize = 16;
let order = 1;

const resetBtn = document.createElement('button');
document.body.appendChild(resetBtn);
resetBtn.classList.add('btn');
resetBtn.textContent = 'Reset';

const list = document.createElement('ul');
document.body.appendChild(list);

btn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = `Element ${order++}`;
  list.appendChild(li);
  li.style.fontSize = fontSize + 'px';
});

increaseBtn.addEventListener('click', () => {
  const elements = document.querySelectorAll('li');
  fontSize += 1;
  elements.forEach(element => {
    element.style.fontSize = `${fontSize} px`;
  });
});

decreaseBtn.addEventListener('click', () => {
  const elements = document.querySelectorAll('li');
  fontSize -= 1;
  elements.forEach(element => {
    element.style.fontSize = fontSize + 'px';
  });
});

resetBtn.addEventListener('click', () => {
  list.textContent = '';
  fontSize = 16;
  order = 1;
});


