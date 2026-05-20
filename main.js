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
    
    try {
        const books = await BookService.getBooksBySubject(genre);
        
        if (books.length === 0) {
            resultsGrid.innerHTML = '<p> Nessun libro disponibile per questo genere.</p>';
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
    } catch (error) {
        if (error.message === 'GENERE_NON_TROVATO') {
            resultsGrid.innerHTML = '<p>❌ Genere non trovato. Prova un altro genere.</p>';
        } else if (error.message.startsWith('ERRORE_RETE')) {
            resultsGrid.innerHTML = '<p>❌ Errore di rete. Controlla la tua connessione e riprova.</p>';
        } else {
            resultsGrid.innerHTML = '<p>❌ Errore sconosciuto. Riprova più tardi.</p>';
            console.error('Unexpected error:', error);
        }
    }
}

// Listener globale per i click sui bottoni "Dettagli"
resultsGrid.addEventListener('click', async (event) => {
    if (event.target.classList.contains('details-btn')) {
        const bookKey = event.target.getAttribute('data-key');
        const descContainer = event.target.parentElement.querySelector('.description');
        
        // Toggle: se i dettagli sono già visibili, nascondili
        if (descContainer.innerHTML.trim() && !descContainer.innerHTML.includes('Caricamento')) {
            descContainer.innerHTML = '';
            return;
        }
        
        descContainer.innerHTML = '<p>Caricamento descrizione...</p>';
        const description = await BookService.getBookDescription(bookKey);
        descContainer.innerHTML = `<p class="fade-in">${description}</p>`;
    }
});

searchButton.addEventListener('click', handleGenreSearch);
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleGenreSearch();
    }
});