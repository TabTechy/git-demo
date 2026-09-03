let count = 0;

const btn = document.getElementById('clickBtn');
const counterText = document.getElementById('counterText');

btn.addEventListener('click', () => {
  count++;
  counterText.textContent = `Button clicked ${count} time${count === 1 ? '' : 's'}`;
});
