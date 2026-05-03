import type { TodoListProps } from "../types";
import TodoItem from "./TodoItem";

const TodoList = ({ markCompleted, todos }: TodoListProps) => {
  return (
    <>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} index={index} markCompleted={markCompleted} />
      ))}
    </>
  );
};

export default TodoList;
