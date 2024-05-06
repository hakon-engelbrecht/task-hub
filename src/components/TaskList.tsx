import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';

const TaskList: React.FC = () => {
    const { tasks, removeTask } = useContext(TaskContext);

    return (
        <List>
            {tasks.map((task) => (
                <ListItem key={task.id}>
                    <ListItemText primary={task.name} secondary={task.description} />
                    <IconButton onClick={() => removeTask(task.id)}>❌</IconButton>
                </ListItem>
            ))}
        </List>
    );
};

export default TaskList;