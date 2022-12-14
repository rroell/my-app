import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  // default value of 'tasks'
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food shopping",
      day: "Feb 5 13.00h",
      reminder: true,
    },
    {
      id: 2,
      text: "Football practice",
      day: "Feb 6 21.00h",
      reminder: true,
    },
    {
      id: 3,
      text: "Visit parents",
      day: "Feb 5 14.00h",
      reminder: false,
    },
  ]);

  // Add new task
  const addTask = (task) => {
    // generate random task id
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    // console.log("Delete task", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    // console.log("Toggle", id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    ); // else nothing changes
  };

  return (
    <div className="Container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? ( // if no task: show text No tasks to show
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
};

export default App;
