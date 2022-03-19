// import { Switch, Route } from '@modern-js/runtime/router';
import { Inputs } from './component/todo';
import { TodoList } from './component/todoList';
import './App.css';

function App() {
  return (
    // <div className="all">
    //   <section className="todoapp">
    //     <div>
    //       <header className="header">
    //         <h1>todos</h1>
    //         <input
    //           type="text"
    //           className="new-todo"
    //           placeholder="what need to be?"
    //         />
    //       </header>
    //     </div>
    //   </section>
    // </div>
    <TodoList>todos</TodoList>
  );
}

export default App;
