import React, { useState } from 'react';
import './App.css'; 


const App = () => {
  const [filter, setFilter] = useState('all'); 
  const [editing, setEditing] = useState(false); 
  const [currentTask, setCurrentTask] = useState({
    id: '',
    text: '',
    time: '',
    completed : false
  });
  const [todos, setTodos] = useState([
    { id: 1, text: 'Create a react project ✌', time: '5:23 AM, 01/06/2022', completed: false },
    { id: 2, text: 'Learn React ♥', time: '5:22 AM, 01/06/2022', completed: false },
    { id: 3, text: 'Create a Todo App 📋', time: '5:21 AM, 01/06/2022', completed: true }
  ]);

  const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
        <span className="time">{todo.time}</span>
        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
          🗑️
        </button>
        <button onClick={() => {
          setEditing(true);
          setCurrentTask(todo);
        }} className="edit-btn">

        </button>
      </div>
    );
  };
  
  const editTodo = ()=>{
    const newTaskIndex = todos.findIndex(t => t.id === currentTask.id);
    if(newTaskIndex !== -1){
      const newTodos = [...todos];
      newTodos[newTaskIndex].text = currentTask.text;
      setTodos(newTodos);
    }
    setCurrentTask({id:'',text:'',time:'',completed:''});
    setEditing(false);
  }

  const addTodo = () => {
    if (currentTask.text === '') return;
    const newTodo = {
      id: todos.length + 1,
      text: currentTask.text,
      time: new Date().toLocaleTimeString() + ', ' + new Date().toLocaleDateString(),
      completed: false
    };
    setTodos([...todos, newTodo]);
    setCurrentTask({id:'',text:'',time:'',completed:''});
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getFilteredTodos = () => {
    if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    } else if (filter === 'incomplete') {
      return todos.filter(todo => !todo.completed);
    } else {
      return todos;
    }
  };

  return (
    <div className="todo-list-container">
      <h1 className="todo-title">TODO LIST</h1>
      <div className="input-container">
        <input 
          type="text" 
          value={currentTask.text} 
          onChange={(e) => setCurrentTask({...currentTask, text:e.target.value})} 
          placeholder="Enter a task" 
          className="task-input"
        />
        {
          editing === true ? 
          <button className="add-task-btn" onClick={editTodo}>Edit Task</button>
          : 
          <button className="add-task-btn" onClick={addTodo}>Add Task</button>
        }
        
        <select 
          className="filter-dropdown" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      
      <div className="todo-items">
        {getFilteredTodos().map((todo) => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
