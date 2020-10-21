var nextTodoId = 3;

/*
 * action creators
 */

export function addTodo(todo) {
  return { type: "ADD_TODO", id: ++nextTodoId, todo };
}
export const toggleTodo = (id) => {
  return { type: "TOGGLE_TODO", id };
};

export const edtiTodo = (id, description) => ({
  type: "EDIT_TODO",
  id,
  description,
});
