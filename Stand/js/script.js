const productos = {
    "Ilustraciones": [
        { nombre: "A3", precio: "10 €" },
        { nombre: "A4", precio: "5 €" },
        { nombre: "A5", precio: "3 €" },
        { nombre: "Pegatinas pequeñas", precio: "2 €" },
        { nombre: "Pegatinas grandes", precio: "3 €" }
    ],
    "Artesanía": [
        { nombre: "Peluches A", precio: "5 €" },
        { nombre: "Peluches B", precio: "9 €" },
        { nombre: "Cerámica A", precio: "4 €" },
        { nombre: "Cerámica B", precio: "8 €" }
    ],
    "Joyería": [
        { nombre: "Pulsera A", precio: "4 €" },
        { nombre: "Pulsera B", precio: "6 €" },
        { nombre: "Pendientes A", precio: "3 €" },
        { nombre: "Pendientes B", precio: "5 €" }
    ],
    "Otros": [
        { nombre: "Abanico", precio: "3 €" },
        { nombre: "Katana", precio: "22 €" },
        { nombre: "Abrazo", precio: "Gratis" }
    ]
};

const categoriaImagenes = {
    "Ilustraciones": "img/ilustraciones.png",
    "Artesanía": "img/artesania.png",
    "Joyería": "img/joyeria.png",
    "Otros": "img/otros.png"
};

const menuList = document.getElementById("menu-list");

Object.keys(productos).forEach(categoria => {
    const categoryTitle = document.createElement("div");
    categoryTitle.classList.add("category");
    
    const text = document.createElement("div");
    text.textContent = categoria;
    
    const img = document.createElement("img");
    img.src = categoriaImagenes[categoria] || "default.png";
    img.alt = categoria;
    
    categoryTitle.appendChild(text);
    categoryTitle.appendChild(img);
    menuList.appendChild(categoryTitle);
    
    productos[categoria].forEach(producto => {
        const item = document.createElement("div");
        item.classList.add("menu-item");
        item.innerHTML = `<span>${producto.nombre}</span> <span>${producto.precio}</span>`;
        menuList.appendChild(item);
    });
});