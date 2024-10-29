App.js
import { default as React, default as React, default as React, useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
<div>
<input type="text" value={inputValue} onChange={handleInputChange} />
<button onClick={addTodo}>Add</button>
<TodoList todos={todos} deleteTodo={deleteTodo} />
</div>
  );
}

export default App;

TodoList.js

const TodoList = ({ todos, deleteTodo }) => {
  return (
<ul>
      {todos.map(todo => (
<li key={todo.id}>
          {todo.text}
<button onClick={() => deleteTodo(todo.id)}>Delete</button>
</li>
      ))}
</ul>
  );
};

export default TodoList;

TodoItem.js

const TodoItem = ({ todo, deleteTodo }) => {
  return (
<li>
      {todo.text}
<button onClick={() => deleteTodo(todo.id)}>Delete</button>
</li>
  );
};

export default TodoItem;