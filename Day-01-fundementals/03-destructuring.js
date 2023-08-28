// const favoriteSinger = {
//     firstName : "Michael",
//     lastName : "Jackson",
//     email : "m@j.com",
//     bestSong : "Bellie Jean"
// }

// const hisLastName = favoriteSinger['lastName']
// const hisFistName = favoriteSinger.firstName
// console.log(`Hist Full Name :${hisFistName} ${hisLastName}`);

// const {firstName:FN, lastName:LN} = favoriteSinger;
// console.log(`Hist Full Name with destructuring:${FN} ${LN}`);


// const superHeros = ["Superman", "Spiderman", "Batman", "WonderWoman"]

// const [, second,, forth] = superHeros
// console.log("Destructuring a list :",second,forth);

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
    {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
    },
    {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
    }
    ],
    createdAt: 1543945177623
};

const {addresses:[,{city:wantedCity}]} = person
console.log("Your home town is : ",wantedCity);


