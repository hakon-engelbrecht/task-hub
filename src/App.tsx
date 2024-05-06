import React from 'react';
import TaskProvider from './context/TaskProvider';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div className="App">
        <h1>TaskHub</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
