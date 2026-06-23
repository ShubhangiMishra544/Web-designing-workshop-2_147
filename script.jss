const menuItems = [
    {
        name: "Burger",
        price: "₹150",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
        name: "Pizza",
        price: "₹300",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },
    {
        name: "Pasta",
        price: "₹220",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
    },
    {
        name: "Cold Coffee",
        price: "₹120",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c"
    }
];

const menuContainer = document.getElementById("menu");

menuItems.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("menu-item");

    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p class="price">${item.price}</p>
    `;

    menuContainer.appendChild(card);
});