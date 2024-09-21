let lessons = new Map();
lessons.set('Математика', 'Смирнов');
lessons.set('История', 'Иванов');

const ivan = new Set();
ivan.add('Математика');
ivan.add('История');

const students = new Map();
students.set("Иван", ivan);

console.log(lessons.get("Математика"));
console.log(students.get("Иван"));
