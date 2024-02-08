// Tenemos un li de productos

const products = [
    {
        nombre: "Zapato negro",
        tipo: "zapato",
        color: "negro",
        img: "./taco-negro.jpg",
    },
    {
        nombre: "Zapato azul",
        tipo: "zapato",
        color: "azul",
        img: "./taco-azul.jpg",
    },
    {
        nombre: "Bota negra",
        tipo: "bota",
        color: "negro",
        img: "./bota-negra.jpg",
    },
    {
        nombre: "Bota azul",
        tipo: "bota",
        color: "azul",
        img: "./bota-azul.jpg",
    },
    {
        nombre: "Zapato rojo",
        tipo: "zapato",
        color: "rojo",
        img: "./zapato-rojo.jpg",
    },
];

const productsList = document.getElementById("lista-de-productos");
const valueToFilter = document.querySelector(".input");
const filterBtn = document.querySelector("#filter");

const createCardProduct = ({ nombre, img }) => {
    // const { nombre, img } = product;
    const card = document.createElement("div");
    card.classList.add("producto");

    const productName = document.createElement("p");
    productName.classList.add("titulo");
    productName.textContent = nombre;

    const imageProduct = document.createElement("img");
    imageProduct.src = img;

    card.appendChild(productName);
    card.appendChild(imageProduct);

    productsList.appendChild(card);
};

const displayProducts = (products) => {
    for (const product of products) {
        createCardProduct(product);
    }
};

const filterProducts = (productos = [], texto) => {
    return productos.filter(
        (item) => item.tipo.includes(texto) || item.color.includes(texto)
    );
};

displayProducts(products);

filterBtn.addEventListener("click", () => {
    while (productsList.firstChild) {
        productsList.removeChild(productsList.firstChild);
    }

    const valueToSearch = valueToFilter.value;
    const searchResults = filterProducts(products, valueToSearch);

    if (searchResults.length === 0) {
        displayProducts(products);
    } else {
        displayProducts(searchResults);
    }
});
