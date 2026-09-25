
/* =====================================
   LINKS INSTRUMENTS SETTINGS
===================================== */

// Replace these with your real business details.

const INSTAGRAM_USERNAME = "linksinstruments1";
const WHATSAPP_NUMBER = "+19088381834";

// Use an empty price "" until you decide your prices.

const products = [
  {
    id: 1,
    name: "Professional Scissors",
    category: "Scissors",
    description: "Precision beauty scissors for professional use.",
    price: "",
    image: "images/scissors.jpg"
  },
  {
    id: 2,
    name: "Precision Tweezers",
    category: "Tweezers",
    description: "Fine-tip tweezers for detailed beauty work.",
    price: "",
    image: "images/tweezers.jpg"
  },
  {
    id: 3,
    name: "Nail Foiler",
    category: "Nail Foilers",
    description: "Tools for smooth nail finishing.",
    price: "",
    image: "images/nail-foiler.jpg"
  },
  {
    id: 4,
    name: "Foot Foiler",
    category: "Foot Foilers",
    description: "Professional foot care and filing tool.",
    price: "",
    image: "images/foot-foiler.jpg"
  },
  {
    id: 5,
    name: "Nail Nipper",
    category: "Nippers & Clippers",
    description: "Nail nippers for precise trimming.",
    price: "",
    image: "images/nippers.jpg"
  },
  {
    id: 6,
    name: "Professional Clippers",
    category: "Nippers & Clippers",
    description: "Essential clippers for nail care.",
    price: "",
    image: "images/nippers.jpg"
  },

  // Add more products below.
  // Example:
  //
  // {
  //   id: 7,
  //   name: "Stainless Steel Scissors",
  //   category: "Scissors",
  //   description: "Premium stainless steel scissors.",
  //   price: "",
  //   image: "images/scissors-2.jpg"
  // }
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
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
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
      <img src="${category.image}"
           alt="${category.name}"
           loading="lazy"
           onerror="this.src='images/logo.png'">

      <div class="category-card-body">
        <h3>${category.name}</h3>
        <p>${category.description}</p>
        <p>Explore collection →</p>
      </div>
    </button>
  `).join("");

  categoryGrid.querySelectorAll(".category-card").forEach(button => {
    button.addEventListener("click", () => {
      openCategory(button.dataset.category);
    });
  });
}

/* =====================================
   OPEN A CATEGORY PAGE
===================================== */

function openCategory(category) {
  activeCategory = category;
  categoryFilter.value = category;
  searchInput.value = "";

  const categoryInfo = categories.find(item => item.name === category);

  catalogEyebrow.textContent = "THE COLLECTION";
  catalogTitle.innerHTML = `${category} <em>Collection</em>`;
  catalogDescription.textContent =
    `Explore all our ${category.toLowerCase()} products.`;

  backButton.hidden = false;

  displayProducts();

  document.getElementById("catalog").scrollIntoView({
    behavior: "smooth"
  });
}

/* =====================================
   SHOW ALL PRODUCTS
===================================== */

function showAllProducts() {
  activeCategory = "all";
  categoryFilter.value = "all";
  searchInput.value = "";

  catalogEyebrow.textContent = "OUR COLLECTION";
  catalogTitle.innerHTML = "All <em>Products</em>";
  catalogDescription.textContent =
    "Explore our professional beauty tools.";

  backButton.hidden = true;

  displayProducts();
}

/* =====================================
   PRODUCT CATALOG
===================================== */

function displayProducts() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  const result = products.filter(product => {
    const searchableText =
      `${product.name} ${product.category} ${product.description}`.toLowerCase();

    const matchesSearch = searchableText.includes(searchTerm);

    const matchesCategory =
      activeCategory === "all" ||
      product.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  productGrid.innerHTML = result.map(product => `
    <article class="product-card">
      <img src="${product.image}"
           alt="${product.name}"
           loading="lazy"
           onerror="this.src='images/logo.png'">

      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>

        ${product.price
          ? `<p class="product-price">${product.price}</p>`
          : `<p class="product-price">Contact for price</p>`
        }

        <button class="order-link" data-order="${product.id}">
          ORDER ON WHATSAPP →
        </button>

        <button class="add-cart" data-cart="${product.id}">
          ADD TO BAG
        </button>
      </div>
    </article>
  `).join("");

  noResults.hidden = result.length !== 0;

  productGrid.querySelectorAll("[data-order]").forEach(button => {
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

  productGrid.querySelectorAll("[data-cart]").forEach(button => {
    button.addEventListener("click", () => {
      addToCart(Number(button.dataset.cart));
    });
  });
}

/* =====================================
   CART
===================================== */

function addToCart(productId) {
  const existing = cart.find(item => item.id === productId);

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
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

function changeQuantity(productId, amount) {
  const item = cart.find(item => item.id === productId);

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
    const product = products.find(product => product.id === item.id);

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">

        <div>
          <h3>${product.name}</h3>
          <p>${product.category}</p>

          <div class="qty-controls">
            <button data-minus="${product.id}">−</button>
            <span>${item.quantity}</span>
            <button data-plus="${product.id}">+</button>
          </div>

          <button class="remove-item" data-remove="${product.id}">
            Remove
          </button>
        </div>
      </div>
    `;
  }).join("");

  cartTotal.textContent = totalItems;

  cartItems.querySelectorAll("[data-minus]").forEach(button => {
    button.addEventListener("click", () => {
      changeQuantity(Number(button.dataset.minus), -1);
    });
  });

  cartItems.querySelectorAll("[data-plus]").forEach(button => {
    button.addEventListener("click", () => {
      changeQuantity(Number(button.dataset.plus), 1);
    });
  });

  cartItems.querySelectorAll("[data-remove]").forEach(button => {
    button.addEventListener("click", () => {
      removeFromCart(Number(button.dataset.remove));
    });
  });
}

/* =====================================
   WHATSAPP CHECKOUT
===================================== */

function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert("Your bag is empty. Please add a product first.");
    return;
  }

  let message = "Hello Links Instruments! I would like to place an order:\n\n";

  cart.forEach(item => {
    const product = products.find(product => product.id === item.id);

    message += `• ${product.name} x ${item.quantity}\n`;
  });

  message += "\nPlease share prices, availability, and shipping details.";

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
  cartDrawer.setAttribute("aria-hidden", "false");
  cartOverlay.hidden = false;
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartOverlay.hidden = true;
}

cartButton.addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
document.getElementById("checkoutButton").addEventListener("click", checkoutWhatsApp);

backButton.addEventListener("click", showAllProducts);

/* =====================================
   SEARCH / FILTER
===================================== */

searchInput.addEventListener("input", displayProducts);

categoryFilter.addEventListener("change", () => {
  activeCategory = categoryFilter.value;

  if (activeCategory === "all") {
    catalogEyebrow.textContent = "OUR COLLECTION";
    catalogTitle.innerHTML = "All <em>Products</em>";
    catalogDescription.textContent =
      "Explore our professional beauty tools.";
    backButton.hidden = true;
  } else {
    const categoryInfo = categories.find(
      item => item.name === activeCategory
    );

    catalogEyebrow.textContent = "THE COLLECTION";
    catalogTitle.innerHTML = `${activeCategory} <em>Collection</em>`;
    catalogDescription.textContent =
      `Explore all our ${activeCategory.toLowerCase()} products.`;
    backButton.hidden = false;
  }

  displayProducts();
});

/* =====================================
   HEADER / CONTACT
===================================== */

document.getElementById("instagramLink").href = instagramUrl();
document.getElementById("whatsappLink").href = whatsappUrl(
  "Hello Links Instruments! I would like to know more about your products."
);

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("open");
  });
});

/* =====================================
   INITIALIZE
===================================== */

displayCategories();
displayProducts();
updateCart();