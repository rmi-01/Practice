export const addTask = (payload) => {
  return ({
    type: 'ADD_TASK',
    payload
  });
}
export const removeTask = (payload) => {
  return ({
    type: 'REMOVE_TASK',
    payload
  });
}
export const cancelTask = (payload) => {
  return ({
    type: 'CANCEL_TASK',
    payload
  });
}