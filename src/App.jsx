import { useState, useEffect } from 'react'
import './App.css'
import { HeaderComponent } from './components/HeaderComponent'
import { TODOHeroComponent } from './components/TODOHeroComponent'
import { FormComponent } from './components/FormComponent'
import { TODOList } from './components/TODOList'

function App() {

  const [todos, setTodos] = useState([]);

  const todos_completed = todos.filter(
    (todos) => todos.is_completed === true
    ).length;
  
  const total_todos = todos.length;

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <div className='wrapper'>
      <HeaderComponent />
      <TODOHeroComponent todos_completed={todos_completed} total_todos={total_todos}/>
      <FormComponent todos={todos} setTodos={setTodos}/>
      <TODOList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
