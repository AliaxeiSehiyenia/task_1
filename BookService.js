import Book from "./Book.js";

class BookService {
    async create(post) {
        const createdBook = await Book.create({...post})
        return createdBook
    }

    async getAll() {
        const books = await Book.find()
        return books
    }
}

export default new BookService()