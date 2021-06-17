const buttons = document.querySelectorAll('#write');
const functions = document.querySelectorAll('#function');
const display = document.querySelector('.display');

[...buttons].forEach((button) => {
  button.addEventListener('click', (event) => {
    const target = event.target;
    display.innerHTML +=
      target.innerHTML === 'x' ? '*' : target.innerHTML;
  });
});

[...functions].forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.innerHTML;
    const initialDisplay = display.innerHTML;
    if (value === 'DEL') {
      display.innerHTML = initialDisplay.slice(0, -1);
    } else if (value === 'RESET') {
      display.innerText = '';
    } else if (value === '=') {
      const value = eval(initialDisplay).toFixed(5);
      display.innerText = value;
    }
  });
});
