import { Lifecycle, scoped } from "tsyringe";
import BookRepo from "./BookRepo";

@scoped(Lifecycle.ContainerScoped)
export class BookService {
  constructor(private bookRepo: BookRepo) {}
  getBooks() {
    return this.bookRepo.getData();
  }
  addBook(title: string) {
    return this.bookRepo.addData(title);
  }
  removeBook(title: string) {
    return this.bookRepo.removeData(title);
  }
}
