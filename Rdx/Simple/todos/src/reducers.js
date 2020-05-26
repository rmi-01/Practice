const initialState = [];

export default function todoReducer(state = initialState, action) {
  const newState = state;
  switch (action.type) {
    case 'ADD_TASK':
      return newState.concat({
        task: action.payload.task,
        id: action.payload.id,
        isToggled: false
      })
    case 'REMOVE_TASK':
      return newState.filter(val => val.id !== action.payload.id);
    case 'CANCEL_TASK':
      newState[action.payload.id].isToggled = !state[action.payload.id].isToggled;
      return newState;
    default:
      return state;
  }
}