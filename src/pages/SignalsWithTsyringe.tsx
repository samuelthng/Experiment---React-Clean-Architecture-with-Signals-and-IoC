import { container } from 'tsyringe';
import InjectionTest from '../components/InjectionTest';
import { BookService } from '../modules/signalsWithTsyringe/books/BookService';
import JsonDisplay from '../components/JsonDisplay';
import useRenderCount from '../hooks/useRenderCount';

export default function SignalsWithTsyringe() {
	const renderCount = useRenderCount();
	return (
		<main>
			<h1>Signals + Dependency Injection</h1>
			<VerboseComments />
			<hr />
			<code>Rendered: {renderCount}</code>
			<p>This page plays with using signals with tsyringe for dependency injection.</p>
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


function VerboseComments() {
  return (
    <details>
      <summary>Comments about signals with Tsyringe</summary>
      <p>
        This page attempts to use signals with tsyringe for dependency injection.
      </p>
      <p>
        It is significant because the surface area for which React interfaces with the modules becomes much smaller, and each module can be injected automatically with dependencies.
      </p>
      <p>
        Untested: Dynamic Dependency Injection and changing strategies at runtime.
      </p>
    </details>
  );
}
