import { useState } from "react";
import { Header } from "./Header";
import { ListHeader } from "./ListHeader";
import { Subheader } from "./Subheader";
import { ItemsList } from "./ItemsList";
import { ListWrapper } from "./ListWrapper";
import { TaskForm } from "./TaskForm";

const initialTodoItems = [
  
];

const App = () => {
  const [todoItemsList, setTodoItemsList] = useState(initialTodoItems);

  const handleAddTask = (newTask) => {
    setTodoItemsList((prev) => [...prev, newTask]);
  };
  return (
    <>
      <Header title="TodoApp" />
      <Subheader subtitle="Todo List Manager" />
      <ListWrapper>
        <ListHeader content="Add New Task" />
        <TaskForm onSubmit={handleAddTask} />
        <ListHeader content="Todo List" />
        <ItemsList itemsList={todoItemsList} />
      </ListWrapper>
    </>
  );
};

export default App;
