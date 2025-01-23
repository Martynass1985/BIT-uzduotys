const shoppingList = [
  { name: "Duona", price: 1.491 },
  { name: "Pienas", price: 0.9923 },
  { name: "Sūris", price: 3.789 },
  { name: "Kiaušiniai", price: 2.392 },
  { name: "Bananas", price: 1.194 },
];

let HTMLTekstas = '<ul class ="italic">';

for (let i = 0; i < shoppingList.length; i++) {
  const einamasisProduktas = shoppingList[i];
  HTMLTekstas += `<li>${
    einamasisProduktas.name
  } - <span class = "gray">${einamasisProduktas.price.toFixed(2)}€</span></li>`;
}

HTMLTekstas += "</ul>";
document.body.insertAdjacentHTML("afterbegin", HTMLTekstas);
