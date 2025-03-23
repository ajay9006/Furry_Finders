function filterBreeds() {
    let input = document.getElementById('searchBreed').value.toLowerCase();
    let cards = document.querySelectorAll('.breed-card');

    cards.forEach(card => {
        let breedName = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = breedName.includes(input) ? "block" : "none";
    });
}
