class Lib {
    #books = [];

    addBook(title) {
        if (this.#books.includes(title))
            throw `книга уже есть в списке`;
        return this.#books.push(title); 
    }

    removeBook(title) {
        if (!this.#books.includes(title))
            throw `книги нет в списке`;
        return this.#books.splice(this.#books.indexOf(title), 1);
    }

    hasBook(title) {
        return this.#books.includes(title);
    }

    get allBooks() {
        return this.#books;
    }
}

const SchoolLibrary = new Lib();
SchoolLibrary.addBook("Математика");
SchoolLibrary.addBook("Биология");
SchoolLibrary.addBook("Физика");
console.log(SchoolLibrary.allBooks)
SchoolLibrary.removeBook("Математика");
console.log(SchoolLibrary.hasBook("Математика"));
console.log(SchoolLibrary.hasBook("Биология"));
console.log(SchoolLibrary.allBooks)
