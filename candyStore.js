const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};
//1
function getCandy(candyStore, id) {
  return candyStore.candies.find((candy) => (candy.id = id));
}
// console.log(getCandy(candyStore, "as12f"));
//2
function getPrice(candyStore, id) {
  const candy = candyStore.candies.find((candy) => (candy.id = id));
  if (candy) {
    return candy.price;
  }
  return undefined;
}
// console.log(getPrice(candyStore, "as12f"));
//3
function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({ name: name, id: id, price: price, amount: 1 });
}
addCandy(candyStore, "ds3d", "kinder", 5);
// console.log(candyStore.candies);

//4
const buy = (candyStore, id) => {
  let itemMsg = "Item not found!";
  candyStore.candies.forEach((candy) => {
    if (candy.id === id) {
      if (candy.amount > 0) {
        candy.amount -= 1;
        candyStore.cashRegister += candy.price;
        itemMsg = "purchase done!";
      } else {
        itemMsg = "amount is: 0";
      }
    }
  });
  console.log(itemMsg);
};
