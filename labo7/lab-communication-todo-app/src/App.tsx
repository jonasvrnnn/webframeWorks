import React, { useState } from "react";
import type { TodoItem } from "./types";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [todo, setTodo] = useState("");

  const addTodo = (todo: string) => {
    setTodos([...todos, { name: todo, completed: false }]);
    setTodo("");
  };

  const markCompleted = (index: number, completed: boolean) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: completed } : todo,
      ),
    );
  };

  return (
    <div>
      <div>
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      </div>
      <div>
        <TodoList todos={todos} markCompleted={markCompleted} />
      </div>
    </div>
  );
};

export default App;
