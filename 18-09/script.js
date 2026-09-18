const products = [
  { id: 1, name: "Pro Laptop", price: 1200, category: "laptops", inStock: true },
  { id: 2, name: "Wireless Mouse", price: 45, category: "accessories", inStock: true },
  { id: 3, name: "Mechanical Keyboard", price: 150, category: "accessories", inStock: false },
  { id: 4, name: "Budget Laptop", price: 600, category: "laptops", inStock: true },
  { id: 5, name: "USB-C Hub", price: 30, category: "accessories", inStock: true },
];

function renderProducts(items) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    items.forEach(product => {
        const card = document.createElement("div");

        card.className = product.inStock
            ? "product-card"
            : "product-card out-of-stock";

        const priceText = product.inStock
            ? `$${product.price}`
            : "Out of Stock";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>${priceText}</p>
        `;

        container.appendChild(card);
    });
}

renderProducts(products);

document.getElementById("btn-all").addEventListener("click", () => {
    renderProducts(products);
});

document.getElementById("btn-laptops").addEventListener("click", () => {
    const laptops = products.filter(item => item.category === "laptops");
    renderProducts(laptops);
});

document.getElementById("btn-accessories").addEventListener("click", () => {
    const accessories = products.filter(item => item.category === "accessories");
    renderProducts(accessories);
});
