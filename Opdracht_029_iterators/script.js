// Loops

// While loop

/* index = 0;
colors = ['yellow', 'blue', 'red', 'orange'];

while (index < colors.length) {
    console.log(colors[index]);
    index++;
} */

// For loop

/* let colors = ['yellow', 'blue', 'red', 'orange'];

for (let index = 0; index < colors.length; index++) {
    console.log(colors[index]);
} */


// forEach Array method

let colors = ['yellow', 'blue', 'red', 'orange'];

colors.forEach(element => console.log(element));


// Comments

/*
1. Hoeveel regels neemt mijn for loop en mijn while loop in beslag? -> while loop: 6 (3), for loop: 4 (2)
2. Hoeveel regels neemt mijn forEach method in beslag? -> 2
3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop?
-> Makkelijker leesbaar dus, je hebt veel keuzemogelijkheden qua methodiek en je hoeft geen extra code
te gebruiken om de code te laten stoppen, zodat ie niet in een loop blijft.
Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom? -> forEach: korter, intuïtiever, makkelijkere code.
4. Zie hieronder
*/

const autos = {
    volkswagen: 5,
    audi: 3,
    opel: 4,
    nissan: 1,
    toyota: 2,
};

const entries = Object.entries(autos);
for (const [auto, count] of entries) {
    console.log(`Er zijn ${count} ${auto}s`)
};