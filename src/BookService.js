class BookServiceClass {
    constructor() {
        if (BookServiceClass.instance) {
            return BookServiceClass.instance;
        }
        this.baseSubjectUrl = 'https://openlibrary.org/subjects';
        this.baseWorkUrl = 'https://openlibrary.org';
        BookServiceClass.instance = this;
    }


    async getBooksBySubject(subject) {
        try {
            const formattedSubject = subject.toLowerCase().replace(/\s+/g, '_');
            const response = await fetch(`${this.baseSubjectUrl}/${formattedSubject}.json?limit=12`);
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error(`GENERE_NON_TROVATO`);
                }
                throw new Error(`ERRORE_RETE: ${response.status}`);
            }
            const data = await response.json();
            return data.works.map(book => ({
                title: book.title,
                authors :book.authors?.map(author => author.name).join(', ') || 'Autore sconosciuto',
                key: book.key
            }));
        } catch (error) {
            console.error('Error fetching books by subject:', error);
            throw error;
        }
    }

    async getBookDescription(bookKey) {
        try {
            const response = await fetch(`${this.baseWorkUrl}${bookKey}.json`);
            const data = await response.json();
            if (!data.description) {
                return 'Descrizione non disponibile';
            }
            return typeof data.description === 'string' ? data.description : data.description.value;
        } catch (error) {
            console.error('Error fetching book description:', error);
            return 'Impossibile caricare la descrizione';
        }
    }
}

export const BookService = new BookServiceClass();