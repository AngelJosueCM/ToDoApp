import {useState} from 'react';

const useTask = () => {
  const [showAdd, setShowAdd] = useState(false);

  const [task, setTask] = useState('');
  //Guardar tasks
  const [tasks, setTasks] = useState(['Tareas pendientes']);

  const [taskUpdate, settaskUpdate] = useState(false);

  const addTask = () => {
    //agregar el task al arreglo
    setTasks(currentTasks => [...currentTasks, task]);
    //limpiar el task
    setTask('');
    //quitar input
    setShowAdd(false);
  };

  const deleteTask = index => {
    const temp = [...tasks];
    temp.splice(index, 1);
    setTasks(temp);
  };

  const editThatTask = (item1) => {
    setShowAdd(true);
    setTask(item1);
  };

  const updateTask = index =>{
    const updateTask = task
    const temp = tasks.map((value, changetask) => {
      if(changetask === index) {
        value = updateTask;
        return value;
      } else {
        return value;
      }
    });
    setTask(temp);
    settaskUpdate(false);
    setShowAdd(false);
    setTask('');
  };

  const updateAdd = state => {
    setShowAdd(state);
    setTask('');
  };

  const editTask = text => {
    setTask(text);
  };

  return {
    addTask,
    deleteTask,
    editThatTask,
    updateTask,
    task,
    tasks,
    showAdd,
    updateAdd,
    editTask,
  };
};

export default useTask;
