import { container } from "tsyringe";
import InjectionTest from "../components/InjectionTest";
import { BookService } from "../modules/books/BookService";
import JsonDisplay from "../components/JsonDisplay";
import useRenderCount from "../hooks/useRenderCount";

export default function TsyringeWithSignals() {
  const renderCount = useRenderCount();
  return (
    <main>
      <h1>Signals + Dependency Injection</h1>
      <code>Rendered: {renderCount}</code>
      <p>
        This page plays with using signals with tsyringe for dependency
        injection.
      </p>
      <InjectionTest />
      <AnotherComponentReadingBooks />
    </main>
  );
}

function AnotherComponentReadingBooks() {
  const bookService = container.resolve(BookService);
  return (
    <>
      <div>Getting books from service scoped to container level (App.js)</div>
      <JsonDisplay label="books" data={bookService.getBooks()} />
    </>
  );
}
