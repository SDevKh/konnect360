const products = [
    {
      title: "Desire Red",
      description: "A seductive burst of passion and warmth.",
      image: "pics/IMG-20250430-WA0002.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Desire Blue",
      description: "Floral tones blended with fresh morning dew.",
      image: "pics/IMG-20250430-WA0003.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Eau De Toilette",
      description: "A delicate yet invigorating fragnance.",
      image: "pics/IMG-20250430-WA0004.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Gucci Flora",
      description: "A sophisticated bouquet of vibrant blooms.",
      image: "pics/prod.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Cool Waves",
      description: " A refreshing rush of crisp, oceanic breeze.",
      image: "pics/0003.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Eu de Noir",
      description: "A mysterious and captivating blend of deep.",
      image: "pics/page_11.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Elixir Noir",
      description: "A blend of spices and dark woods.",
      image: "pics/page_2.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Wanted By Night",
      description: "A bold, spicy fragnance with a smoky sweetness.",
      image: "pics/page_3.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "King Oudh",
      description: "A regal, commanding fragnance of rich oud and exotic spices.",
      image: "pics/page_4.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Miss Dior",
      description: "A floral bouquet with a hint of citrus.",
      image: "pics/page_5.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    }
  ];
  
  const container = document.getElementById("product-container");
  
products.forEach(p => {
  const originalPrice = parseFloat(p.price.replace("₹", "").replace(",", ""));
  const discountedPrice = p.discountedPrice
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <div class="product-image">
      <img src="${p.image}" alt="${p.title}" />
    </div>
    <div class="product-details">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="product-price-rating">
          <span class="original-price">₹ ${originalPrice}</span>
          <span class="discounted-price">${discountedPrice}</span>
      </div>
      <span style="display:block"; class="rating">${p.review}</span>
      <button class="whatsapp-btn" data-product="${p.title}">Buy Now</button>
    </div>
  `;
  container.appendChild(div);
});

  
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('whatsapp-btn')) {
      e.preventDefault();
  
      const productName = e.target.getAttribute('data-product');
      const whatsappNumber = '918850631474'; // Replace with your number including country code
      const message = `Hi, I want to buy ${productName}.`;
  
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
      window.open(whatsappURL, '_blank');
    }
  });