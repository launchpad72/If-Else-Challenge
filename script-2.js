const dolphines1 = 96;
const dolphines2 = 108;
const dolphines3 = 89;

const koalas1 = 88;
const koalas2 = 91;
const koalas3 = 110;

const dolphinesAverage = (koalas1 + koalas2 + koalas3 / 3);
console.log(dolphinesAverage);

const koalasAverage = (dolphines1 + dolphines2 + dolphines3 / 3);
console.log(koalasAverage);

if ((koalasAverage || dolphinesAverage) < 100) {
    console.log("Does not meet minimum score")
} else if (koalasAverage == dolphinesAverage) {
    console.log("This is a tie")
} else if (koalasAverage > dolphinesAverage) {
    console.log("Koalas Win")
} else if (dolphinesAverage > koalasAverage) {
    console.log("Dolphines Win")
}