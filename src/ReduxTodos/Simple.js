import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as action from './actions';

function Simple() {

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
    if(task.length > 0){
      dispatch(action.addTask({
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
    dispatch(action.cancelTask({
      id
    }));
  }

  const removeTask = (id) => {
    dispatch(action.removeTask({
      id
    }))
  }

  return (
    <div className="redux-todos">
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

export default Simple;
