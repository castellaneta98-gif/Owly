import { BookService } from "./src/BookService.js";
const input = document.querySelector('#genre-input');
const searchButton = document.querySelector('#search-btn');
const resultsGrid = document.querySelector('#results-grid');

async function handleGenreSearch() {
    const genre = input.value.trim();
    if (!genre) {
        alert('Per favore, inserisci un genere valido.');
        return;
    }
    resultsGrid.innerHTML = '<p>Caricamento libri...</p>';
    const books = await BookService.getBooksBySubject(genre);
    if (books.length === 0) {
        resultsGrid.innerHTML = '<p>Nessun libro trovato per questo genere.</p>';
        return;
    }
    resultsGrid.innerHTML = '';
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Autore:</strong> ${book.authors}</p>
            <button class="details-btn" data-key="${book.key}">Dettagli</button>
            <div class="description"></div>
        `;
        resultsGrid.appendChild(bookCard);
    });
}

// Listener globale per i click sui bottoni "Dettagli"
resultsGrid.addEventListener('click', async (event) => {
    if (event.target.classList.contains('details-btn')) {
        const bookKey = event.target.getAttribute('data-key');
        const descContainer = event.target.parentElement.querySelector('.description');
        descContainer.innerHTML = '<p>Caricamento descrizione...</p>';
        const description = await BookService.getBookDescription(bookKey);
        descContainer.innerHTML = `<p class="fade-in">${description}</p>`;
    }
});

searchButton.addEventListener('click', handleGenreSearch);