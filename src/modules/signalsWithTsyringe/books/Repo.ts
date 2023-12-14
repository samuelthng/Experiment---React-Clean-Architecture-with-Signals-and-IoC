export default abstract class Repo {
  public abstract getData(): string[];
  public abstract addData(data: string): boolean;
  public abstract removeData(data: string): boolean;
}
