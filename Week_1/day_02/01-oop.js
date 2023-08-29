// Classes ? blueprint or template to create objects

// book class => books (objects)

class Book {
    // Constructor
    // Attributes
    // Methods
    constructor(title, pages, author, year){
        this.title = title
        this.pages = pages
        this.author = author
        this.year = year
    }
}

// - Create an object 

const book = new Book("Book of Life", 1000, "James", 1800)
// console.log(book);
const{title:bookTitle} = book;
// console.log(`the book title is ${bookTitle}`);


class Vehicule {
    constructor(make, model, year, hp, color= "Black"){
        this.make = make
        this.model = model
        this.year = year
        this.miles = 0
        this.hp = hp
        this.color = color 
    }
    drive(){
        this.miles+= 20;
        // console.log(`${this.model} has driven 20 Miles, Total miles now Equal = ${this.miles}`);
        return this
    }
    honk(target){
        // console.log("BEEEEEK", this.model, "honed at", target.model);
        return this
    }
}

const vehicule1 = new Vehicule("WV", "Golf", 2010, 140);
const vehicule2 = new Vehicule("WV", "Polo", 2015, 50, "red");
// console.log(vehicule1);
// console.log(vehicule2);
vehicule2.drive().drive().honk(vehicule1).drive()

// OOP Pillars : Inheritence 

class Tesla extends Vehicule {
    constructor(model, year, hp, autopilot){
        super("Tesla", model, year, hp)
        this.autopilot = autopilot
    }
}
const y = new Tesla ("Y", 2020, 2000, "Gray", true)
const x = new Tesla ("X", 2023, 0, true)

console.log(x);
console.log(y);


