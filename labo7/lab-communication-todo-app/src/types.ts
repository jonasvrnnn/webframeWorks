export interface TodoItem {
  name: string;
  completed: boolean;
}

export interface TodoInputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (todo: string) => void;
}

export interface TodoItemProps {
  todo: TodoItem;
  index: number;
  markCompleted: (index: number, completed: boolean) => void;
}
export interface TodoListProps {
  markCompleted: (index: number, completed: boolean) => void;
  todos: TodoItem[];
}
