import { observer } from 'mobx-react-lite';
import Todo from '../modules/mobx/todo';

const myTodo = new Todo('My Todo');

function MobxPage({ todo = myTodo ?? {} as Todo }) {
  return (
    <main>
      <p>{todo.id}: {todo.title}</p>
      <p>Finished: {JSON.stringify(todo.finished)}</p>
      <button onClick={todo.toggle}>Toggle Complete</button>
    </main>
  );
}

export default observer(MobxPage);
