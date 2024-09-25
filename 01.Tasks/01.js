const musicCollection = [
{
    title: "Metallica",
    artist: "James Hetfield",
    year: "1982"
},
{
    title: "Ride the Lightning",
    artist: "Metallica",
    year: "1984"
},
{
    title: "Master of Puppets",
    artist: "Metallica",
    year: "1986"
},
{
    title: "Enter Sandman",
    artist: "Metallica",
    year: "1991"
}
];

musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            if (this.current < this.to) {
                return { value: musicCollection[this.current++], done: false };
            } else {
                return { done: true };
            }
        }
    }
};

for (let album of musicCollection) {
    console.log(album.title, album.artist, album.year);
}