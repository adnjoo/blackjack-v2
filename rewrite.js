//declare variables: cards, suits
const cards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const suits = ["H", "S", "C", "D"];
let deck = [];

// make a deck
function newdeck(arr, numberOfDecks) {
  for (let h = 0; h < numberOfDecks; h++) {
    for (let i in cards) {
      for (let j in suits) {
        arr.push(`${cards[i]}${suits[j]}`);
      }
    }
  }
  return arr;
}
//shuffle a deck
function shuffle(arr) {
  let newArr = [];
  let count = 0;
  while (newArr.length < arr.length) {
    let sCard = arr[Math.floor(Math.random() * arr.length)];
    for (let i in newArr) {
      if (newArr[i] == sCard) {
        count++;
      }
    }
    if (count < arr.length / 52) {
      newArr.push(sCard);
    }
    count = 0;
  }
  return newArr;
}
deck = newdeck(deck, 100);
deck = shuffle(deck);
console.log(deck)


