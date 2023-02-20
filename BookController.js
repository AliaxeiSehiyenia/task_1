import BookService from "./BookService.js";

class BookController {
    async create(req, res) {
        try {
            const book = await BookService.create(req.body)
            res.status(200).json(book)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const books = await BookService.getAll()
            res.json(books)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new BookController()