import TASK from './tarea.js';
import { addInput, submitTask } from './variables.js';
import { setStorage } from './storage.js';

export const addTask = () => {
  TASK.TASKarr.push({
    taskDescrip: addInput.value, completed: false, index: TASK.TASKarr.length + 1,
  });
  setStorage();
};

export const deleteTask = (element) => {
  TASK.TASKarr = TASK.TASKarr.filter((task) => task.index !== parseInt(element.id, 10));
  TASK.TASKarr.forEach((task, ind) => {
    task.index = ind + 1;
  });
  element.remove();
  setStorage();
};

submitTask.addEventListener('click', () => {
  addTask();
  document.location.reload(true);
  addInput.value = '';
});