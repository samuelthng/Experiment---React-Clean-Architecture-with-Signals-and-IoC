import { container } from "tsyringe";
import { BookService } from "../modules/books/BookService";

// Use instance in React.
export default function InjectionTest({
  // Get instance from container.
  bookService = container.resolve(BookService),
}) {
  const books = bookService.getBooks();
  // Note that React is only triggering and consuming data from the class.
  // Updates are triggered by signals.
  return (
    <div>
      <h3>Dependency Injection Test</h3>
      <button onClick={() => bookService.addBook(`book${books.length + 1}`)}>
        Add Book
      </button>
      <button onClick={() => bookService.removeBook(books[books.length - 1])}>
        Remove Book
      </button>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {books.map((book) => (
          <span key={book}>{book}</span>
        ))}
      </div>
      <hr />
    </div>
  );
}
