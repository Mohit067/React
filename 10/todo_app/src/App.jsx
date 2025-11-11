import { useCallback, useState } from 'react'
import './App.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function App() {

  const [todos , setTodos] = useState([{ value: 'HomeWork'}]);

  function deleteTodoById(value){
    const newTodos = todos.filter(todo => todo.value !== value);
    setTodos(newTodos);
  }
  const memoDeleteTodoCallback = useCallback(deleteTodoById, [todos]);

  function onTodoFormSubmit(value){
    if(value){
      setTodos([...todos, { value}]);
    }
  }

  return (
    <>
      <TodoInput onSubmit={onTodoFormSubmit}/>

      <TodoList listOfTodos={todos} onDeleteTodo={memoDeleteTodoCallback}/>

    </>
  )
}

export default App
