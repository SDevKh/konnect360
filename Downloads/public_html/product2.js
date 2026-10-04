const products = [
    {
      title: "Pacific Ocean",
      description: " A deep, aquatic embrace of salt, breeze, and boundless blue.",
      image: "pics/7.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Club De Nuit Intense",
      description: "A powerful, captivating blend of citrus and smoky woods",
      image: "pics/6.jpg",
       price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Dunhill Icon Racing",
      description: "A vibrant, energetic fragnance that captures the thrill.",
      image: "pics/5.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Ombre Leather",
      description: "A rich, leathery scent with a hint of floral.",
      image: "pics/4.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Oud Wood",
      description: "A warm, woody fragnance with a hint of spice.",
      image: "pics/3.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "YSLY Elixir",
      description: "A luxurious, sensual fragnance that combines floral and fruity.",
      image: "pics/2.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Azure The Most Wanted",
      description: "Spicy notes for a unique scent.",
      image: "pics/1.jpg",
      price: "₹ 1,500",
      discountedPrice: "WhatsApp Us",
      review: "⭐⭐⭐⭐☆ 43 reviews"
    },
    {
      title: "Imperial Valley",
      description: "A bold, daring fragnance that combines sweet.",
      image: "pics/imperial valley.jpg",
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