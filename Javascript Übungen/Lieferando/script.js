let singleValue;
let sumTotal = 0;
let cart = [];

let dishes = [
  {
    dishName: "Pizza Margherita",
    dishInfo: "Wahl aus: Klein, ca. 24cm, Mittel, ca. 28cm, Groß, ca. 32cm.",
    dishPrice: 5.0,
    counter: "+",
  },

  {
    dishName: "Pizza Salamie",
    dishInfo: "Wahl aus: Klein, ca. 24cm, Mittel, ca. 28cm, Groß, ca. 32cm.",
    dishPrice: 7.0,
  },

  {
    dishName: "Pizza Schinken",
    dishInfo: "Wahl aus: Klein, ca. 24cm, Mittel, ca. 28cm, Groß, ca. 32cm.",
    dishPrice: 7.2,
  },

  {
    dishName: "Pizza Hawai",
    dishInfo: "Wahl aus: Klein, ca. 24cm, Mittel, ca. 28cm, Groß, ca. 32cm.",
    dishPrice: 6.5,
  },

  {
    dishName: "Pizza Döner",
    dishInfo: "Wahl aus: Klein, ca. 24cm, Mittel, ca. 28cm, Groß, ca. 32cm.",
    dishPrice: 9.0,
  },
];

function render() {
  renderDishes();
}

function renderDishes() {
  for (let i = 0; i < dishes.length; i++) {
    let formattedPrice = dishes[i].dishPrice.toFixed(2).replace(".", ",");
    document.getElementById("dishRander").innerHTML += `
      <div class="dish-container" id=dish${i} onclick="addToCart(${i})">
        <div class="dish-name">
          <span> ${dishes[i].dishName} </span>
          <div class="dish-counter" id="dishCounter${i}">
            <span>+</span>
          </div>
        </div>
        <div class="dish-info">
          <span
            >Wahl aus: Klein, ca. 24cm, Mittel, ca. 28cm, Groß, ca. 32cm.</span>
        </div>
        <div class="dish-price"><h3>${formattedPrice} €</h3></div>
      </div>
    `;
  }
  renderCart();
}

function renderCart() {
  if (cart.length == 0) {
    cartEmpty();
  } else {
    cartFilled();
  }
}

function addToCart(i) {
  let dish = dishes[i];
  let index = cart.indexOf(dishes[i]);
  if (index == -1) {
    dish.counter = 1;
    cart.push(dish);
  } else {
    cart[index].counter++;
  }
  document.getElementById("cart").innerHTML = "";
  renderCart();
  RanderCounter(i);
  priceAllDishes();
}

function subToCart(i) {
  cart[i].counter--;
  if (cart[i].counter === 0) {
    cart.splice(i, 1);
  }
  document.getElementById("cart").innerHTML = "";
  renderCart();
  RanderCounter(i);
  priceAllDishes();
}

function RanderCounter(i) {
  if ((dishes[i].counter == 0)) {
    document.getElementById(`dishCounter${i}`).innerHTML = `
    <span>+</span>
  `;
  } else {
    document.getElementById(`dishCounter${i}`).innerHTML = ``;
    document.getElementById(`dishCounter${i}`).innerHTML = `
  <span>${dishes[i].counter}</span>
`;
  }
}

function cartEmpty() {
  return (document.getElementById("cart").innerHTML += `
      <img src="./img/warenkorb.png">
      <h2>Fülle deinen Warenkorb</h2>
      <p>Füge einige leckere Gerichte aus der Speißekarte hinzu und bestelle dein Essen.</p>
  `);
}

function cartFilled() {
  for (let i = 0; i < cart.length; i++) {
    let formattedPrice = singleValueDish(i).toFixed(2).replace(".", ",");
    document.getElementById("cart").innerHTML += `
      <div id=${i}>
      <div class="sektion-1">
          <div>
              <span><b>${cart[i].counter}</b></span>
          </div>
          <div class="cartNamePrice">
              <h4>${cart[i].dishName}</h4>
              <p>${formattedPrice}</p>
          </div>
      </div>
      <div class="section-2">
          <span>Anmerkung hinzufügen</span>
          <div class="add-sub">
              <div class="dish-counter" onclick="subToCart(${i})">-</div>
              <div class="dish-counter" onclick="addToCart(${i})">+</div>
          </div>
      </div>
      </div>
      `;
  }
}

function singleValueDish(i) {
  singleValue = cart[i].counter * cart[i].dishPrice;
  cart[i].priceTotal = singleValue;
  return singleValue;
}

function priceAllDishes() {
  sumTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    sumTotal = cart[i].priceTotal + sumTotal;
  }
}