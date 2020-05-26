import React, { useState, useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const list = useSelector(state => state);
  const dispatch = useDispatch();
  const [task, setTask] = useState("")

  useEffect(() => {
    console.log(list)
  }, [])

  return (
    <div>
      <h1>Todo List</h1>
      <input onChange={e => setTask(e.target.value)} value={task} />
    </div>
  );
}

export default App;
