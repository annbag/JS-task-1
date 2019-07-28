const btn = document.querySelector('button.btn');
const increaseBtn = document.querySelector('button.increase-btn');
const decreaseBtn = document.querySelector('button.decrease-btn');
const elements = document.querySelectorAll('li');

let fontSize = 16;

btn.addEventListener('click', () => {
  
 
  elements.forEach(element => {
    element.style.display = 'block';
  });
});

increaseBtn.addEventListener('click', () => {
    fontSize += 1;
    elements.forEach(element=> {
        element.style.fontSize = fontSize + 'px';
    })
});

decreaseBtn.addEventListener('click', ()=>{
    fontSize -= 1;
    elements.forEach(element => {
        element.style.fontSize = fontSize + 'px';
    })
})
