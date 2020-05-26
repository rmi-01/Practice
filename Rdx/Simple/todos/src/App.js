import React, { useState, useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import * as action from './actions'

function App() {

  const list = useSelector(state => state.task);
  const dispatch = useDispatch();
  const [task, setTask] = useState("")

  useEffect(() => {
    document.querySelector('input').focus();
  }, [])

  useEffect(() => {
    console.log(list)
  }, [list])

  const addTask = () => {
    dispatch(action.addTask({
      task,
      id: list.length
    }))
    document.querySelector('input').focus();
    setTask("");
  }

  const cancelTask = (id) => {
    dispatch(action.cancelTask({
      id
    }));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input onChange={e => setTask(e.target.value)} value={task} />
      <button onClick={addTask}>Add</button>
      {
        list.length
          ?
          (
            <ul>
            {
              list.map(entry => {
              return (
                <li key={entry.id}>
                  <p onClick={() => cancelTask(entry.id)}>{entry.task}</p>
                </li>
              )
            })
            }
            </ul>
          )
          :
          (
            <p>You don't have any tasks</p>
          )
      }
    </div>
  );
}

export default App;
