import type { TodoItemProps } from "../types";

const TodoItem = ({ todo, index, markCompleted }: TodoItemProps) => {
  return (
    <>
      <div key={index}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(event) => markCompleted(index, event.target.checked)}
        />
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.name}
        </span>
      </div>
    </>
  );
};

export default TodoItem;
