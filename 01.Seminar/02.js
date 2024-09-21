const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" }
];

console.log(books);
books.push({ title: "War and Peace", author: "Leo Tolstoy" });
console.log(books);

// books[Symbol.iterator] = function () {
//     return {
//         current: 0,
//         to: this.length,
//         next() {
//             if (this.current < this.to) {
//                 return { value: books[this.current++], done: false };
//             } else {
//                 return { done: true };
//             }
//         }
//     }
// };

// for (let book of books) {
//     console.log(book.title, book.author);
// }