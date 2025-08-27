// Opgave 1
let person = {
    fornavn: "Christopher",
    efternavn: "Vesterby",
    alder: 29,
    hjemby: "Løvel",
};

// Udskrivning med dot notation
console.log(person.fornavn);
console.log(person.efternavn);

// Udskrivning med bracket notation
console.log(person["alder"]);
console.log(person["hjemby"]);


// Opgave 2
let person2 = {
    firstname: "Christopher",
    lastname: "Vesterby",
    age: 29,
    hometown: "Løvel",
    interesser: ["kodning", "musik", "skrivning"],
    erStuderende: true,
    erArbejdene: false,
    addresse: {
        gade: "Trekroner Centervej 56",
        postnummer: "4000",
    }
};

// For each loop
for (let i = 0; i < person2.interesser.length; i++) {
    console.log(person2.interesser[i]);
}

// Nestede objekt addresse
for (let key in person2.addresse) {
    console.log(person2.addresse[key]);
}

