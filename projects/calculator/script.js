const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calc-buttons button');
let current = '';
let reset = false;

function updateDisplay(val) {
  display.textContent = val;
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.textContent;
    if (val === 'C') {
      current = '';
      updateDisplay('0');
    } else if (val === '=') {
      try {
        // eslint-disable-next-line no-eval
        current = eval(current).toString();
        updateDisplay(current);
        reset = true;
      } catch {
        updateDisplay('Error');
        current = '';
        reset = true;
      }
    } else {
      if (reset) {
        current = '';
        reset = false;
      }
      current += val;
      updateDisplay(current);
    }
  });
}); 