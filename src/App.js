
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Form from './component/Form';
import Todo from './component/Todo'
import { deleteAll } from './redux/todoapp/action/Index';
import { useState } from 'react';
function App() {
  
    const dispatch = useDispatch()
  const todos = useSelector((state)=>state.oprationsReducer)

  const [editFormVisibility, setEditFormVisibility]=useState(false);

  const [editTodo,setEditTodo]=useState('')

  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }
   const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }
  
  return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-APP</h1>
      <Form  editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
   <Todo handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      
   {todos.length > 1&&(
        <button style={{background:'red',color:'#fff'}}
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
    
    </div>
    // ********
  )
}

export default App;
