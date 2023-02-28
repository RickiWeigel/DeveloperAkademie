async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


// Lieferando Challange

let menus = ["Pizza Salami","Pizza Hawai", "Pizza Schinken"];
let prices = [7.20,7.50,7.90];
let amounts = [1,2,3];

function getValueFromInput(inputId){
  let input = document.getElementById(inputId);
  return input.value;
}

function getMenuFromInput() {
  let menuInput = getValueFromInput('menu');
  let menuTrim = menuInput.trim();
  if (menuTrim){
    return menuTrim
  }
  return alert('Bitte gebe was ein!')
}

function getPriceFromInput() {
  let priceInput = getValueFromInput("price");
  let parsedPrice = parseFloat(priceInput);
  if (isNaN(parsedPrice)) {
    return null;
  }
  return parsedPrice;
}

function onAddMenu() {
  let menu = getMenuFromInput();
  let price = getPriceFromInput();
  menus.push(menu);
  prices.push(price);
  amounts.push(1); 
}

function getMenuIndex(menu) {
  return menus.indexOf(menu);
}
