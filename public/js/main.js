fetch('https://ilydanyxx_coins.onrender.com/api/products')
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector('.container');
    data.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h3>${p.name}</h3><p>${p.description}</p><strong>${p.price}₴</strong>`;
      container.appendChild(card);
    });
  });

