const products = [
    {
      title: "Cool Water",
      description: "Floral tones blended with fresh morning dew.",
      image: "pics/page_14.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Khails Oudh",
      description: "Dark, seductive, with a touch of oud and spice.",
      image: "pics/page_13.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Dior Sauvage",
      description: "A fresh and spicy fragnance with a hint of warmth.",
      image: "pics/page_15.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Eau de Parfum",
      description: "A rich and long-lasting fragnance.",
      image: "pics/page_16.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Deep Blue",
      description: "Fresh aquatic fragnancewith citrus notes.",
      image: "pics/page_12.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Oudh Kuwaiti",
      description: "A bold symphony of rich oud and Eastern allure.",
      image: "pics/page_10.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Pacific Chill",
      description: "A cool, refreshing wave of serenity.",
      image: "pics/page_9.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    
    {
      title: "Beach Flower",
      description: "A breezy bloom of ocean-kissed petals.",
      image: "pics/page_6.jpg",
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
    const btn = e.target.closest('.whatsapp-btn');
    if (btn) {
      e.preventDefault();
  
      const productName = btn.getAttribute('data-product');
      const whatsappNumber = '918850631474?text=Hi'; // without + or 00
      const message = `Hi, I want to buy ${productName}`;
      
      let whatsappURL;
  
      // Detect Android
      const isAndroid = /android/i.test(navigator.userAgent);
  
      if (isAndroid) {
        whatsappURL = `intent://send/${whatsappNumber}/?text=${encodeURIComponent(message)}#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end`;
      } else {
        // For iOS and desktop
        whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      }
  
      window.open(whatsappURL, '_blank');
    }
  });