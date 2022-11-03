// --- If ---

// booleans

const wahr = true;
const falsch = false;

console.log("Wahr", wahr);
console.log("Falsch", falsch);

// if ..

if (true) {
  console.log("Hii");
}

if (false) {
  console.log("Kommt nicht an oder?");
}

// if .. else ..

if (false) {
  console.log("Kommt nicht an oder?");
} else {
  console.log("Aber das hier schon!");
}

//    kleiner als: <
// kleiner gleich: <=
//     größer als: >
//  größer gleich: >=
//     ist gleich: ===
if (4 < 5) {
  console.log("richtig");
} else {
  console.log("falsch");
}

// if .. else if .. else ..

const number = 20;
if (number < 5) {
  console.log(number, "ist kleiner 5");
} else if (number < 20) {
  console.log(number, "ist größer gleich 5 und kleiner als 20");
} else {
  console.log(number, "ist größer als 20");
}

// --- Übung 1 ---

// --- Loops ---

/* while
 */

// infinite:
// while (true) {}

let index = 0;
while (index < 5) {
  console.log("while", index);
  index += 1;
}

/* for
 */
for (let index = 0; index < 7; index += 1) {
  console.log("for", index);
}

const list = [213, 234, 32, 0.4, 12];
let sum_1 = 0;
for (let index = 0; index < list.length; index += 1) {
  sum_1 += list[index];
}
console.log("Summe 1", sum_1);

/* for of
 */
let sum_2 = 0;
for (const num of list) {
  sum_2 += num;
}
console.log("Summe 2", sum_2);

/* fun fact
 */
console.log(
  "Summe 3",
  list.reduce((accum, num) => accum + num)
);

// --- Übung 2 ---
