import React from 'react'

function Item({id, text, task, deleteTask, toggleTask}) {
    console.log('Hi');
    return (
        <div>
            abc 
            <input type="checkbox" onChange={() => toggleTask(task.id)} checked={task.completed}/>
            <h3>{text}</h3>
            <button onClick={()=>deleteTask(task.id)}>X</button>
        </div>
    )
}

export default Item