import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskContext } from '../context/TaskContext';
import { TextField, Button } from '@mui/material';

const TaskForm: React.FC = () => {
  const { addTask } = useContext(TaskContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    addTask({
      id: uuidv4(),
      name,
      description,
      startTime: new Date(),
      endTime: new Date(),
      duration: 0,
    });

    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;