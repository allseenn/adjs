function addMetadata(book, metadataType, datа){
    if(book[metadataType]){
        book[metadataType].push(datа);
    } else {
        book[metadataType] = [datа];
    }
    // book[metadataType] = datа;
}

function getMetadata(book, metadataType){
    return book[metadataType];
}

const book = {
    title: "1984",
    author: "George Orwell"
};

const reviewSymbol = Symbol("review");
const ratingSymbol = Symbol("rating");
const tagsSymbol = Symbol("tags");

addMetadata(book, reviewSymbol, "Great book!");
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, "dystopia");

console.log(getMetadata(book, reviewSymbol));
console.log(getMetadata(book, ratingSymbol));
console.log(getMetadata(book, tagsSymbol));