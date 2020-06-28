import React, { useState, useEffect } from 'react'
// import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from 'react-redux';
import { addTask_toolkit, cancelTask_toolkit, removeTask_toolkit } from './toolkitSlice'

export default function Toolkit() {
  const list = useSelector(state => state.task.tasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState("")

  useEffect(() => {
    document.querySelector('input').focus();
    console.log(list);
    console.log(task);
  }, [])

  useEffect(() => {
    console.log(list)
  }, [list])

  const addTask = () => {
    if(task.length > 0){
      dispatch(addTask_toolkit({
        task,
        id: list.length ? list[list.length - 1].id + 1 : 0
      }))
      document.querySelector('input').focus();
      setTask("");
    }
    
  }

  const keyHandler = (e) => {
    if(e.key === 'Enter'){
      addTask();
    }
  }

  const cancelTask = (id) => {
    dispatch(cancelTask_toolkit({
      id
    }));
  }

  const removeTask = (id) => {
    dispatch(removeTask_toolkit({
      id
    }))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div id="input">
        <input onChange={e => setTask(e.target.value)} value={task} onKeyPress={(e) => keyHandler(e)}/>
        <button onClick={addTask}>Add</button>
      </div>
      {
        list.length
          ?
          (
            <ul>
            {
              list.map(entry => {
              return (
                <li key={entry.id}>
                  <p onClick={() => cancelTask(entry.id)} className={entry.isToggled && 'lineThrough'}>{entry.task}</p>
                  <span class="material-icons" onClick={() => removeTask(entry.id)}>
                    delete_outline
                  </span>
                </li>
              )
            })
            }
            </ul>
          )
          :
          (
            <p className="noTasks">You don't have any tasks</p>
          )
      }
    </div>
  );
}