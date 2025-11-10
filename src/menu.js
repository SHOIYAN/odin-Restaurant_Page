export default function loadMenu() {
  const content = document.getElementById("content");
  content.textContent = "";
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer");
  const header = document.createElement("h2");
  const list = document.createElement("ul");

  header.textContent = "Menu";

  const menuItems = [
    { name: "Ramen", price: "$12" },
    { name: "Matcha Latte", price: "$5" },
    { name: "Sushi Platter", price: "$18" },
    { name: "Tempura Udon", price: "$14" },
    { name: "Green Tea Ice Cream", price: "$6" },
  ];

  menuItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name}`;
    const span = document.createElement("span");
    span.textContent = `${item.price}`;
    listItem.appendChild(span);
    list.appendChild(listItem);
  });

  menuContainer.append(header, list);
  content.append(menuContainer);
}
