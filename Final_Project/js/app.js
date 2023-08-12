document.addEventListener('DOMContentLoaded', function () {
  const cardContainer = document.getElementById('card');
  const selectedCategory = cardContainer.getAttribute('data-category');

  function createCard(listing) {
    const card = document.createElement('div');
    card.classList.add("card");
    card.classList.add("cards");

    const listingsImage = document.createElement('img');
    listingsImage.src = listing.imageUrl;
    listingsImage.classList.add("card-image");
    card.appendChild(listingsImage);

    return card;
  }

  function showProductsByCategory(category) {
    cardContainer.innerHTML = '';

    listings.forEach(listing => {
      if (listing.categories.includes(category)) { 
        const card = createCard(listing);
        cardContainer.appendChild(card);
      }
    });
  }

  function loadProductsForCategory(categoryId) {
    const categoryInfo = categories.find(category => category.id === categoryId);
    showProductsByCategory(categoryInfo.id);
  }
  

  // Load products based on the selected category
  loadProductsForCategory(selectedCategory);
});
