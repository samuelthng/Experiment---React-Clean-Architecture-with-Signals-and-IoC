import BookRepo from "./BookRepo";

/** Showcase basic unit testing. */
describe("BookRepo", () => {
  it("should add and remove data", () => {
    const bookRepo = new BookRepo();
    expect(bookRepo.getData()).toEqual(["book1", "book2"]);
    expect(bookRepo.addData("book3")).toBe(true);
    expect(bookRepo.getData()).toEqual(["book1", "book2", "book3"]);
    expect(bookRepo.removeData("book1")).toBe(true);
    expect(bookRepo.getData()).toEqual(["book2", "book3"]);
  });
});
