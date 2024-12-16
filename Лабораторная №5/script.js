const calculate = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;
    if (operation === '+') result = num1 + num2;
    else if (operation === '-') result = num1 - num2;
    else if (operation === '*') result = num1 * num2;
    else if (operation === '/' && num2 !== 0) result = num1 / num2;
    else result = 'Ошибка';
    document.getElementById('result1').textContent = result;
  };
  
  const checkAge = () => {
    const ageInput = document.getElementById('age');
    const ageResult = document.getElementById('ageResult'); 
    const age = parseInt(ageInput.value);
    let result;
    if (isNaN(age) || age <=0){
      result = 'Пожалуйста, введите корректный возраст.';
    } else {
      result = `Ваш возраст: ${age}`;
    }
    ageResult.textContent = result; 
  };
  
  
  const checkPalindrome = () => {
    const surname = document.getElementById('surname').value.toLowerCase().replace(/[^a-zA-Z]/g, ''); // Corrected regex
    const reversedSurname = surname.split('').reverse().join('');
    const isPalindrome = surname === reversedSurname;
    document.getElementById('result3').textContent = isPalindrome ? 'Это палиндром' : 'Это не палиндром';
  };
  
  
  const calculateAverage = () => {
    const numbersStr = document.getElementById('numbers').value;
    const numbers = numbersStr.split(',').map(Number).filter(num => !isNaN(num));
    const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length || 0;
    document.getElementById('result4').textContent = average;
  };
  
  
  const daysToNewYear = () => {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = newYear.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    document.getElementById('result5').textContent = days;
  };
  
  
  const emptyFunction = () => {};
  
  
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const sum = numbersArray.reduce((a, b) => a + b, 0);
  const evenNumbers = numbersArray.filter(num => num % 2 === 0);
  const doubledNumbers = numbersArray.map(num => num * 2);
  
  document.getElementById('result7').innerHTML = `
    Сумма элементов: ${sum}<br>
    Четные числа: ${evenNumbers.join(', ')}<br>
    Удвоенные числа: ${doubledNumbers.join(', ')}
  `;
  
  
  const emails = ["test@gmail.com", "user@yandex.ru", "info@example.org", "another@gmail.com"];
  const emailList = document.getElementById('emailList');
  
  const updateEmailList = () => {
    const filter = document.getElementById('emailFilter').value.toLowerCase();
    emailList.innerHTML = ''; 
    emails.forEach(email => {
      if (email.toLowerCase().includes(filter)) {
        const li = document.createElement('li');
        li.textContent = email;
        emailList.appendChild(li);
      }
    });
  };
  
  document.getElementById('emailFilter').addEventListener('input', updateEmailList);
  updateEmailList(); 
  