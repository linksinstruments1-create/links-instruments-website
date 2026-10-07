/* =====================================
   LINKS INSTRUMENTS SETTINGS
===================================== */

// Replace these with your real business details.
const INSTAGRAM_USERNAME = "linksinstruments1";
const WHATSAPP_NUMBER = "+19088381834";

// Products
const products = [
  {
    id: 1,
    name: "Scissors SC-01",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-1.png"
  },
  {
    id: 2,
    name: "Scissors SC-02",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-2.png"
  },
  {
    id: 3,
    name: "Scissors SC-03",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-3.png"
  },
  {
    id: 4,
    name: "Scissors SC-04",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-4.png"
  },
  {
    id: 5,
    name: "Scissors SC-05",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-5.png"
  },
  {
    id: 6,
    name: "Scissors SC-06",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-6.png"
  },
  {
    id: 7,
    name: "Scissors SC-07",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-7.png"
  },
  {
    id: 8,
    name: "Scissors SC-08",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-8.png"
  },
  {
    id: 9,
    name: "Scissors SC-09",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-9.png"
  },
  {
    id: 10,
    name: "Scissors SC-10",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-10.png"
  },
  {
    id: 11,
    name: "Scissors SC-11",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-11.png"
  },
  {
    id: 12,
    name: "Scissors SC-12",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-12.png"
  },
  {
    id: 13,
    name: "Scissors SC-13",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-13.png"
  },
  {
    id: 14,
    name: "Scissors SC-14",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-14.png"
  },
  {
    id: 15,
    name: "Scissors SC-15",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-15.png"
  },
  {
    id: 16,
    name: "Scissors SC-16",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-16.png"
  },
  {
    id: 17,
    name: "Scissors SC-17",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-17.png"
  },
  {
    id: 18,
    name: "Scissors SC-18",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-18.png"
  },
  {
    id: 19,
    name: "Scissors SC-19",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-19.png"
  },
  {
    id: 20,
    name: "Scissors SC-20",
    category: "Scissors",
    description: "Professional beauty scissors.",
    price: "",
    image: "images/scissors-20.png"
  },
  {
    id: 21,
    name: "Precision Tweezers",
    category: "Tweezers",
    description: "Fine-tip tweezers for detailed beauty work.",
    price: "",
    image: "images/tweezers.jpg"
  },
  {
    id: 22,
    name: "Nail Foiler",
    category: "Nail Foilers",
    description: "Tools for smooth nail finishing.",
    price: "",
    image: "images/nail-foiler.jpg"
  },
  {
    id: 23,
    name: "Foot Foiler",
    category: "Foot Foilers",
    description: "Professional foot care and filing tool.",
    price: "",
    image: "images/foot-foiler.jpg"
  },
  {
    id: 24,
    name: "Nail Nipper",
    category: "Nippers & Clippers",
    description: "Nail nippers for precise trimming.",
    price: "",
    image: "images/nippers.jpg"
  },
  {
    id: 25,
    name: "Professional Clippers",
    category: "Nippers & Clippers",
    description: "Essential clippers for nail care.",
    price: "",
    image: "images/nippers.jpg"
  }
];


/* =====================================
   CATEGORY SETTINGS
===================================== */

const categories = [
  {
    name: "Scissors",
    description: "Precision scissors",
    image: "images/scissors.jpg"
  },
  {
    name: "Tweezers",
    description: "Fine beauty tweezers",
    image: "images/tweezers.jpg"
  },
  {
    name: "Nail Foilers",
    description: "Nail finishing tools",
    image: "images/nail-foiler.jpg"
  },
  {
    name: "Foot Foilers",
    description: "Foot care tools",
    image: "images/foot-foiler.jpg"
  },
  {
    name: "Nippers & Clippers",
    description: "Nail care instruments",
    image: "images/nippers.jpg"
  }
];


/* =====================================
   ELEMENTS
===================================== */

const categoryGrid = document.getElementById("categoryGrid");
const productGrid = document.getElementById("productGrid");
const noResults = document.getElementById("noResults");

const catalogTitle = document.getElementById("catalogTitle");
const catalogEyebrow = document.getElementById("catalogEyebrow");
const catalogDescription = document.getElementById("catalogDescription");
const backButton = document.getElementById("backToCategories");

const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

let activeCategory = "all";
let cart = [];


/* =====================================
   URLS
===================================== */

function instagramUrl() {
  return `https://instagram.com/${INSTAGRAM_USERNAME}`;
}

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function productMessage(product) {
  return `Hello Links Instruments! I am interested in ${product.name}. Please share the price and availability.`;
}


/* =====================================
   CATEGORY CARDS
===================================== */

function displayCategories() {

  categoryGrid.innerHTML = categories.map(category => `
    <button class="category-card" data-category="${category.name}">

      <img
        src="${category.image}"
        alt="${category.name}"
        loading="lazy"
        onerror="this.src='images/logo.png'"
      >

      <div class="category-card-body">

        <h3>${category.name}</h3>

        <p>${category.description}</p>

        <p>Explore collection →</p>

      </div>

    </button>
  `).join("");


  categoryGrid
    .querySelectorAll(".category-card")
    .forEach(button => {

      button.addEventListener("click", () => {
        openCategory(button.dataset.category);
      });

    });
}


/* =====================================
   OPEN CATEGORY
===================================== */

function openCategory(category) {

  activeCategory = category;

  catalogEyebrow.textContent = "THE COLLECTION";

  catalogTitle.innerHTML =
    `${category} <em>Collection</em>`;

  catalogDescription.textContent =
    `Explore all our ${category.toLowerCase()} products.`;

  backButton.hidden = false;

  document.getElementById("shop").hidden = true;
  document.getElementById("catalog").hidden = false;

  displayProducts();

  document.getElementById("catalog").scrollIntoView({
    behavior: "smooth"
  });
}


/* =====================================
   BACK TO COLLECTION
===================================== */

function showAllProducts() {

  activeCategory = "all";

  catalogEyebrow.textContent = "OUR COLLECTION";

  catalogTitle.innerHTML =
    "Shop by <em>Category</em>";

  catalogDescription.textContent =
    "Professional beauty instruments for every detail.";

  backButton.hidden = true;

  document.getElementById("catalog").hidden = true;
  document.getElementById("shop").hidden = false;

  document.getElementById("shop").scrollIntoView({
    behavior: "smooth"
  });
}


/* =====================================
   PRODUCT CATALOG
===================================== */

function displayProducts() {

  const result = products.filter(product =>
    activeCategory === "all" ||
    product.category === activeCategory
  );


  productGrid.innerHTML = result.map(product => `

    <article class="product-card">

      <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
        onerror="this.src='images/logo.png'"
      >

      <div class="product-info">

        <span class="product-category">
          ${product.category}
        </span>

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        ${
          product.price
            ? `<p class="product-price">${product.price}</p>`
            : `<p class="product-price">Contact for price</p>`
        }

        <button
          class="order-link"
          data-order="${product.id}"
        >
          ORDER ON WHATSAPP →
        </button>

        <button
          class="add-cart"
          data-cart="${product.id}"
        >
          ADD TO BAG
        </button>

      </div>

    </article>

  `).join("");


  noResults.hidden = result.length !== 0;


  /* WhatsApp buttons */

  productGrid
    .querySelectorAll("[data-order]")
    .forEach(button => {

      button.addEventListener("click", () => {

        const product = products.find(
          item => item.id === Number(button.dataset.order)
        );

        window.open(
          whatsappUrl(productMessage(product)),
          "_blank",
          "noopener"
        );

      });

    });


  /* Add to bag buttons */

  productGrid
    .querySelectorAll("[data-cart]")
    .forEach(button => {

      button.addEventListener("click", () => {

        addToCart(
          Number(button.dataset.cart)
        );

      });

    });
}


/* =====================================
   CART
===================================== */

function addToCart(productId) {

  const existing = cart.find(
    item => item.id === productId
  );

  if (existing) {

    existing.quantity++;

  } else {

    cart.push({
      id: productId,
      quantity: 1
    });

  }

  updateCart();
  openCart();
}


function removeFromCart(productId) {

  cart = cart.filter(
    item => item.id !== productId
  );

  updateCart();
}


function changeQuantity(productId, amount) {

  const item = cart.find(
    item => item.id === productId
  );

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {

    removeFromCart(productId);

  } else {

    updateCart();

  }
}


function updateCart() {

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  cartCount.textContent = totalItems;


  if (cart.length === 0) {

    cartItems.innerHTML = `
      <p class="empty-cart">
        Your bag is empty.<br>
        Add products to place an order.
      </p>
    `;

    cartTotal.textContent = "0";

    return;
  }


  cartItems.innerHTML = cart.map(item => {

    const product = products.find(
      product => product.id === item.id
    );

    return `

      <div class="cart-item">

        <img
          src="${product.image}"
          alt="${product.name}"
        >

        <div>

          <h3>${product.name}</h3>

          <p>${product.category}</p>

          <div class="qty-controls">

            <button data-minus="${product.id}">
              −
            </button>

            <span>${item.quantity}</span>

            <button data-plus="${product.id}">
              +
            </button>

          </div>

          <button
            class="remove-item"
            data-remove="${product.id}"
          >
            Remove
          </button>

        </div>

      </div>

    `;

  }).join("");


  cartTotal.textContent = totalItems;


  cartItems
    .querySelectorAll("[data-minus]")
    .forEach(button => {

      button.addEventListener("click", () => {

        changeQuantity(
          Number(button.dataset.minus),
          -1
        );

      });

    });


  cartItems
    .querySelectorAll("[data-plus]")
    .forEach(button => {

      button.addEventListener("click", () => {

        changeQuantity(
          Number(button.dataset.plus),
          1
        );

      });

    });


  cartItems
    .querySelectorAll("[data-remove]")
    .forEach(button => {

      button.addEventListener("click", () => {

        removeFromCart(
          Number(button.dataset.remove)
        );

      });

    });
}


/* =====================================
   WHATSAPP CHECKOUT
===================================== */

function checkoutWhatsApp() {

  if (cart.length === 0) {

    alert(
      "Your bag is empty. Please add a product first."
    );

    return;
  }


  let message =
    "Hello Links Instruments! I would like to place an order:\n\n";


  cart.forEach(item => {

    const product = products.find(
      product => product.id === item.id
    );

    message +=
      `• ${product.name} x ${item.quantity}\n`;

  });


  message +=
    "\nPlease share prices, availability, and shipping details.";


  window.open(
    whatsappUrl(message),
    "_blank",
    "noopener"
  );
}


/* =====================================
   CART OPEN / CLOSE
===================================== */

function openCart() {

  cartDrawer.classList.add("open");

  cartDrawer.setAttribute(
    "aria-hidden",
    "false"
  );

  cartOverlay.hidden = false;

  document.body.classList.add(
    "cart-is-open"
  );
}


function closeCart() {

  cartDrawer.classList.remove("open");

  cartDrawer.setAttribute(
    "aria-hidden",
    "true"
  );

  cartOverlay.hidden = true;

  document.body.classList.remove(
    "cart-is-open"
  );
}


/* =====================================
   BUTTON EVENTS
===================================== */

cartButton.addEventListener(
  "click",
  openCart
);


document
  .getElementById("closeCart")
  .addEventListener(
    "click",
    closeCart
  );


cartOverlay.addEventListener(
  "click",
  closeCart
);


document
  .getElementById("checkoutButton")
  .addEventListener(
    "click",
    checkoutWhatsApp
);


backButton.addEventListener(
  "click",
  showAllProducts
);


/* =====================================
   HEADER / CONTACT
===================================== */

document.getElementById(
  "instagramLink"
).href = instagramUrl();


document.getElementById(
  "whatsappLink"
).href = whatsappUrl(
  "Hello Links Instruments! I would like to know more about your products."
);


document.getElementById(
  "year"
).textContent = new Date().getFullYear();


/* Mobile menu */

document
  .getElementById("menuToggle")
  .addEventListener("click", () => {

    document
      .getElementById("nav")
      .classList
      .toggle("open");

  });


document
  .querySelectorAll("nav a")
  .forEach(link => {

    link.addEventListener("click", () => {

      document
        .getElementById("nav")
        .classList
        .remove("open");

    });

  });


/* =====================================
   INITIALIZE
===================================== */

displayCategories();
updateCart();