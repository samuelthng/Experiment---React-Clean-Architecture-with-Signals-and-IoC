import { signal } from "@preact/signals-react";
import Repo from "./Repo";

export default class BookRepo extends Repo {
  repoData = signal(["book1", "book2"]);
  getData() {
    return this.repoData.value;
  }
  public addData(data: string): boolean {
    if (this.repoData.value.includes(data)) return false;
    this.repoData.value = [...this.repoData.value, data];
    return true;
  }
  public removeData(data: string): boolean {
    if (!this.repoData.value.includes(data)) return false;
    this.repoData.value = [
      ...this.repoData.value.filter((item) => item !== data),
    ];
    return true;
  }
}
