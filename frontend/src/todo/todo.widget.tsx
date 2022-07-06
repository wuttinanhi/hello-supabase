import { KeyboardEvent, useEffect, useState } from "react";
import { ITodo, TodoHelper } from "../common/todo.helper";

export function TodoRow({ todo }: { todo: ITodo }) {
  const [data, setData] = useState(todo);
  const [isRemoved, setIsRemoved] = useState(false);

  function remove() {
    TodoHelper.removeTodo(data.id);
    setIsRemoved(true);
  }

  async function edit() {
    const newName = prompt("Edit", data.name);
    if (newName) {
      const updated = await TodoHelper.editTodo(data.id, newName);
      setData(updated);
    }
  }

  if (isRemoved === true) return null;

  return (
    <p>
      {data.name}
      <button onClick={edit}>✏️</button>
      <button onClick={remove}>❌</button>
    </p>
  );
}

export function TodoWidget() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [value, setValue] = useState("");

  async function addTodo(name: string) {
    const data = await TodoHelper.addTodo(value);
    setTodos([...todos, data]);
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    addTodo(value);
    setValue("");
  }

  async function load() {
    const result = await TodoHelper.getTodos();
    setTodos(result);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h1>Todo</h1>
      {todos.map((todo, index) => (
        <TodoRow key={index} todo={todo}></TodoRow>
      ))}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
