import { useState, useRef, useEffect } from 'react'
import borrar from '../assets/borra.png'
import editar from '../assets/editar.png'

export const Item = ( {item, todos, setTodos} ) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);

    const handleCompleted = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => 
                todo.id === item.id ? {...todo, is_completed: !todo.is_completed} : todo
        ));

        // Update localStorage after marking todo as completed
        const updatedTodos = JSON.stringify(todos);
        localStorage.setItem("todos", updatedTodos);
    }

    const handleEdit = () => {
        setEditing(true);
    }

    const handleDelete = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
        const updatedTodos = JSON.stringify(
          todos.filter((todo) => todo.id !== item.id)
        );
        localStorage.setItem("todos", updatedTodos);
    }

    const handleInpuSubmit = (event) => {
      event.preventDefault();

      // Update localStorage after editing todo
      const updatedTodos = JSON.stringify(todos);
      localStorage.setItem("todos", updatedTodos);
    };
    
    const handleInputBlur = () => {
      // Update localStorage after editing todo
      const updatedTodos = JSON.stringify(todos);
      localStorage.setItem("todos", updatedTodos);
      setEditing(false);
    };

    const handleInputChange = (e) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === item.id ? { ...todo, title: e.target.value } : todo
          )
        );
    };

    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();

            inputRef.current.setSelectionRange(
                inputRef.current.value.length,
                inputRef.current.value.length
            );
        }
    }, [editing]);

  return (
    <li id={item?.id} className="todo_item">
        {editing ? (
        <form className="edit-form" onSubmit={handleInpuSubmit}>
          <label htmlFor="edit-todo">
            <input
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />
          </label>
        </form>
      ) : (
        <>
            <button className="todo_items_left" onClick={ handleCompleted }>
            <svg fill={item.is_completed ? "#22C55E" : "#0d0d0d"}>
                <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
            </svg>
            <p style={item.is_completed ? { textDecoration: "line-through" } : {}}>{item?.title}</p>
            </button>
            <div className="todo_items_right">
                <button onClick={ handleEdit }>
                    <span className="visually-hidden">Edit</span>
                    <img src={ editar }/>
                </button>
                <button onClick={ handleDelete }>
                    <span className="visually-hidden">Delete</span>
                    <img src={ borrar }/>
                </button>
            </div>
        </>
      )}
        
    </li>
  )
}
