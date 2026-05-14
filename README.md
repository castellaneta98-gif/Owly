# 📚 Owly - Book Discovery App

> Un'applicazione web moderna per scoprire libri affascinanti cercando per genere

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![JavaScript](https://img.shields.io/badge/JavaScript-Advanced-yellow)

## 🎯 Descrizione

**Owly** è un'applicazione web elegante e intuitiva che permette agli utenti di cercare e scoprire libri dal vasto catalogo di Open Library. Basta inserire un genere e l'app mostrerà una collezione curata di libri con autori, titoli e descrizioni dettagliate.

Costruita con tecnologie moderne e best practices di JavaScript avanzato, Owly dimostra l'implementazione di pattern di design, async/await, e moderni strumenti di build.

## ✨ Caratteristiche Principali

- 🔍 **Ricerca per Genere** - Scopri libri filtrando per genere letterario
- 📖 **Descrizioni Dettagliate** - Leggi le descrizioni complete di ogni libro
- 🎨 **Interfaccia Responsive** - Design elegante che funziona su tutti i dispositivi
- ⚡ **Caricamento Rapido** - Costruito con Vite per performance ottimali
- 🏗️ **Architettura Pulita** - Pattern Singleton e separazione dei concern
- 🧪 **Test Automatizzati** - Suite di test completa con Vitest

## 🛠️ Stack Tecnologico

- **Frontend**: HTML5, CSS3, JavaScript (ES6+ Modules)
- **Build Tool**: [Vite](https://vitejs.dev/) 8.0.12
- **Testing**: [Vitest](https://vitest.dev/) 4.1.6
- **API**: Open Library (openlibrary.org)
- **Pattern**: Singleton, Event-Driven Architecture

## 🚀 Avvio Rapido

### Prerequisiti

- Node.js 14+ 
- npm o yarn

### Installazione

```bash
# Clona il repository
git clone https://github.com/tuonome/Owly.git
cd Owly

# Installa le dipendenze
npm install
```

### Comandi Disponibili

```bash
# Avvia il server di sviluppo (http://localhost:5173)
npm run dev

# Build per la produzione
npm run build

# Anteprima della build
npm run preview

# Esegui i test
npm run test
```

## 📁 Struttura del Progetto

```
Owly/
├── src/
│   ├── BookService.js          # Servizio centralizzato (Singleton)
│   ├── BookService.test.js     # Test unitari
│   └── assets/                 # Risorse statiche
├── index.html                  # Entry point HTML
├── main.js                     # Logica principale dell'app
├── style.css                   # Stili globali
├── package.json                # Configurazione progetto
└── vite.config.js              # Configurazione build
```

## 💡 Architettura

### BookService (Singleton Pattern)

```javascript
class BookServiceClass {
    constructor() {
        if (BookServiceClass.instance) {
            return BookServiceClass.instance;
        }
        // Inizializzazione...
    }
}
```

Il servizio centralizza tutte le chiamate all'API Open Library, garantendo una sola istanza durante l'esecuzione dell'app.

### API Endpoints Utilizzati

- `GET /subjects/{subject}.json` - Recupera libri per genere
- `GET /works/{work_key}.json` - Recupera dettagli completi del libro

## 🎨 Funzionalità Principali

### 1. Ricerca Libri
L'utente inserisce un genere (es: "fantasy", "romance", "scienza") e l'app mostra fino a 12 libri pertinenti.

### 2. Visualizzazione Risultati
Ogni libro viene mostrato in una card con:
- Titolo
- Autore(i)
- Pulsante "Dettagli"

### 3. Descrizione Libro
Cliccando "Dettagli", la descrizione del libro viene caricata e mostrata con un'animazione fade-in.

## 🧪 Testing

Il progetto include test unitari per il BookService:

```bash
npm run test
```

I test verificano:
- Corretto recupero dei libri per genere
- Gestione degli errori
- Recupero delle descrizioni

## 🌐 API Utilizzate

**Open Library API** - https://openlibrary.org/api/

Una fantastica API gratuita e open source che fornisce:
- Milioni di metadati di libri
- Informazioni su autori e editori
- Descrizioni dettagliate

## 📝 Note di Sviluppo

### Pattern Implementati

- **Singleton Pattern** - BookService esiste in una sola istanza
- **Event-Driven** - Gestione degli eventi DOM per l'interazione utente
- **Async/Await** - Gestione moderna delle promesse
- **Module Pattern** - Organizzazione del codice tramite moduli ES6

### Gestione Errori

L'app gestisce gracefully:
- Generi non trovati
- Descrizioni non disponibili
- Errori di rete con messaggi user-friendly

## 👨‍💻 Autore

**Giuseppe Castellaneta**

Progetto realizzato come esercizio di JavaScript Avanzato, dimostrando competenze in:
- Architettura applicativa
- Gestione asincrona
- Pattern di design
- Testing automatizzato
- Gestione delle API REST

## 🙏 Ringraziamenti

- [Open Library](https://openlibrary.org/) per l'API gratuita
- [Vite](https://vitejs.dev/) per l'eccellente build tool
- [Vitest](https://vitest.dev/) per il framework di testing



