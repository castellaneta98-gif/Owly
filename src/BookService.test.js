import { describe,it,expect } from "vitest";
import { BookService } from "./BookService.js";
describe('BookService', () => {
    it('dovrebbe recuperare libri dato un genere', async () => {
        const books = await BookService.getBooksBySubject('love');
        expect(Array.isArray(books)).toBe(true);
        expect(books[0]).toHaveProperty('key');
    });

    it('dovrebbe recuperare una descrizione valida per un libro', async () => {
        const description = await BookService.getBookDescription('/works/OL27448W');
        expect(typeof description).toBe('string');
    });
});