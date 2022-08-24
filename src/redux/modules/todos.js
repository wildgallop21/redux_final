// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const GET_TODO = "GET_TODO";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload: payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload: payload };
};

export const toggleStatusTodo = (payload) => {
  return { type: TOGGLE_TODO, payload: payload };
};

export const getTodoById = (payload) => {
  return { type: GET_TODO, payload: payload };
};

// initial State
const initialState = {
  todos: [
    { id: 1, title: "react를 배워봅시다.", content: "내용1", isDone: false },
    { id: 2, title: "redux를 배워봅시다~!!", content: "내용2", isDone: false },
  ],
  isLoading: [1, 2, 3],
  error: [1, 2, 3],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      let newTodo = state.todos.filter((todo) => todo.id !== action.payload.id);
      return {
        todos: newTodo,
        
        // todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case TOGGLE_TODO:
      let newTodo2 = state.todos.map((todo) => {
        // console.log(todo);
        // console.log("state", state);
        // console.log("state.todos", state.todos);

        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
      // console.log("newTodo2", newTodo2);
      return {
        todos: newTodo2,
      };

    case GET_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todos;