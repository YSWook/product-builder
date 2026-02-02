const generateButton = document.getElementById('generate');
const resultDiv = document.getElementById('result');

generateButton.addEventListener('click', () => {
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }
  
  resultDiv.textContent = Array.from(numbers).join(', ');
});