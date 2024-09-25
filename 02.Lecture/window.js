//console.log(window);
const newWindow = window.open('https://yandex.ru', '_blank');
console.log(newWindow.innerHeight);
newWindow.location.href = 'https://mail.ru.ru';
setTimeout(() => newWindow.close(), 15000);

