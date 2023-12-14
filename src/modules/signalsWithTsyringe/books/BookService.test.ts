import { container } from "tsyringe";
import { BookService } from "./BookService";
import BookRepo from "./BookRepo";

describe("BookService", () => {
  // Regular testing.
  it("should add and remove data", () => {
    const bookService = container.resolve(BookService);
    expect(bookService.getBooks()).toEqual(["book1", "book2"]);
    expect(bookService.addBook("book3")).toBe(true);
    expect(bookService.getBooks()).toEqual(["book1", "book2", "book3"]);
    expect(bookService.removeBook("book1")).toBe(true);
    expect(bookService.getBooks()).toEqual(["book2", "book3"]);
  });

  // Test with mock BookRepo class registered with tsyringe
  it("should add and remove data with mock", () => {
    const addData = jest.fn();
    const removeData = jest.fn();
    const getData = jest.fn();
    class FakeRepo extends BookRepo {
      public addData = addData;
      public removeData = removeData;
      public getData = getData;
    }
    const mockContainer = container.createChildContainer();
    mockContainer.register(BookRepo, FakeRepo);

    // Arrange - register the mock class with tsyringe, then create a bookServices with mocked dependencies.
    const bookService = mockContainer.resolve(BookService);

    // Act - trigger book service method.
    bookService.getBooks();
    bookService.addBook("book3");
    getData.mockReturnValueOnce(["book1", "book2"]);
    bookService.removeBook("book1");

    // Assert - check that the mock fn has been called.
    expect(getData).toHaveBeenCalledTimes(1);
    expect(addData).toHaveBeenCalledTimes(1);
    expect(addData).toHaveBeenCalledWith("book3");
    expect(removeData).toHaveBeenCalledTimes(1);
    expect(removeData).toHaveBeenCalledWith("book1");

    removeData.mockReturnValueOnce(false);
    expect(bookService.removeBook("fakeBook")).toBe(false);
  });
});
