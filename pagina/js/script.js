document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const homeButton = document.getElementById('homeButton');
  const cards = document.querySelectorAll('.card');
  const noResults = document.getElementById('noResults');

  searchInput.addEventListener('keyup', filterProjects);

  
  homeButton.addEventListener('click', () => {
    searchInput.value = '';
    filterProjects();
  });

  function filterProjects() {
    const input = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    cards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();

      if (title.includes(input) || description.includes(input)) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    noResults.style.display = (visibleCount === 0) ? 'block' : 'none';
  }
});