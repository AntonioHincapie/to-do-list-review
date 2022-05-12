import { setStorage } from './storage.js';
import TASK from './tarea.js';

const modifyTask = (index, value) => {
  TASK.TASKarr[index - 1].taskDescrip = value;
  setStorage();
};

export default modifyTask;