const initialState = {
  task: []
};

export default function todoReducer(state = initialState, action) {
  const newState = { ...state }
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...newState,
        task: newState.task.concat({
          task: action.payload.task,
          id: action.payload.id,
          isToggled: false
        })
      }
    case 'REMOVE_TASK':
      return {
        ...newState,
        task: newState.task.filter(entry => entry.id !== action.payload.id)
      }
    case 'CANCEL_TASK':
      // console.log(newState.task[action.payload.id])
      return {
        ...newState,
        task: newState.task.map((entry, i) => i === action.payload.id ? { ...entry, isToggled: !newState.task[action.payload.id].isToggled } : { ...entry })
      }
    default:
      return newState;
  }
}