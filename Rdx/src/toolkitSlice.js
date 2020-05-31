import { createSlice } from "@reduxjs/toolkit";

export const task = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask_toolkit: (state, { payload }) => {
      state.tasks = state.tasks.concat({
        id: payload.id,
        task: payload.task,
        isToggled: false
      })
    },
    cancelTask_toolkit: (state, { payload }) => {
      state.tasks = state.tasks.map((entry) => entry.id === payload.id ? { ...entry, isToggled: !entry.isToggled } : { ...entry })
    },
    removeTask_toolkit: (state, { payload }) => {
      state.tasks = state.tasks.filter(entry => entry.id !== payload.id)
    }
  }
})

export const {
  addTask_toolkit,
  cancelTask_toolkit,
  removeTask_toolkit
} = task.actions;

export default task.reducer;