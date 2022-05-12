import TASK from './tarea.js';
import { setStorage } from './storage.js';

const clearAll = () => {
  TASK.TASKarr = TASK.TASKarr.filter((task) => task.completed !== true);
  TASK.TASKarr.forEach((task, ind) => {
    task.index = ind + 1;
  });
  setStorage();
};

export default clearAll;