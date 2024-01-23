import './App.css';
import { useState } from 'react';
import Item from './Item';
function App() {
  const [tasks, setTasks] = useState([ {
    id: 1,
    text: 'Doctor Appointment',
    completed: true
    },
    {
    id: 2,
    text: 'Meeting at School',
    completed: false
    }]);
  const [text, setText] = useState('');

  function addTask(text){
    const newTask = {
      id : Date.now() ,
      text,
      completed: false
    }
    setTasks([...tasks, newTask]);
    setText('');
  }

  function deleteTask(id){
    setTasks(tasks.filter(task => task.id !== id));
  } 

  function toggleTask(id){
    setTasks(
      tasks.map((task)=>{
          if(task.id === id){
            return{...task,completed: !task.completed};
          }
          else{
            return task;
          }
      })
    )
  }

  return (
    <div className="App">
      {tasks.map((task)=>{
        <Item id={task.id} text={task.text} task={task} deleteTask={deleteTask} toggleTask={toggleTask}/>
      })}
      <input  value={text} onChange={e=>setText(e.target.value)}/>
      <button onClick={()=>addTask(text)}>Add</button>
    </div>
  );
}

export default App;
