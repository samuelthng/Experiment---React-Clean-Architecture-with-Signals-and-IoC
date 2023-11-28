import { injectable, container } from "tsyringe";
import { signal } from "@preact/signals-react";

export class Database {
  getData() {
    return signal([1,2,3]);
  }
}


@injectable()
export default class Library {
  constructor(public database: Database) {}

  getBooks() {
    return this.database.getData();
  }
}

container.register<Database>(Database, { useClass: Database });
container.register<Library>(Library, { useClass: Library });