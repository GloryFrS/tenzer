const ADD_TODO = 'ADD_TODO'

export const addTodo = (text: string) => {
  return {
    type: ADD_TODO,
    text
  }
}
