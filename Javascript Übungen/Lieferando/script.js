let cart = [];

let dishes = [
  {
    dishName: "Pizza Margherita",
    dishInfo: "Wahl aus: Klein, ca. 24cm, Mittel, ca. 28cm, Groß, ca. 32cm.",
    dishPrice: 5.0,
    counter: '+'
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
    cartEmpty()
  } else {
    cartFilled()
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
  addCounter(i)
}

function singleValueDish(){

}

function minOrder(){

}

function addCounter(i){
  document.getElementById(`dishCounter${i}`).innerHTML =``;
  document.getElementById(`dishCounter${i}`).innerHTML = `
  <span>${dishes[i].counter}</span>
`;
}

function cartEmpty(){
  return document.getElementById("cart").innerHTML += `
  <h1> Warenkorb</h1>
      <img src="./img/warenkorb.png">
      <h2>Fülle deinen Warenkorb</h2>
      <p>Füge einige leckere Gerichte aus der Speißekarte hinzu und bestelle dein Essen.</p>
  `;
}

function cartFilled(){
  return document.getElementById(`cart`).innerHTML += `
  <h1> Warenkorb</h1>
  <div class="sektion-1">
      <div><span><b>+</b></span></div>
      <div class="cartNamePrice">
          <h4>Name Gericht</h4>
          <p>5.00€</p>
      </div>
  </div>
  <div class="section-2">
      <span>Anmerkung hinzufügen</span>
      <div class="add-sub">
          <div class="dish-counter">-</div>
          <div class="dish-counter" onclick="addToCart(i)">+</div>
      </div>
  </div>
  `;
}