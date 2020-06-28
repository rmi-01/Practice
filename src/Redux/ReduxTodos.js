import React from 'react';
import '../App.css';
import Simple from './Simple';
import Toolkit from './Toolkit';
import { Provider } from "react-redux";
// import { useSelector, useDispatch } from 'react-redux';
// import * as action from './actions';
import toolkitReducer from './toolkitSlice';
import { configureStore } from '@reduxjs/toolkit';

const toolkitStore = configureStore({
  reducer: {
    task: toolkitReducer
  }
})

function App() {
  return (
    <Provider store={toolkitStore}>
      <Toolkit />
    </Provider>
  );
}

export default App;
