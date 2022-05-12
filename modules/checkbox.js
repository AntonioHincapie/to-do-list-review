import { setStorage } from './storage.js';
import TASK from './tarea.js';

const changeBox = (e) => {
  const { target } = e;
  const idTarget = parseInt(target.id, 10);
  for (let i = 0; i < TASK.TASKarr.length; i += 1) {
    if (TASK.TASKarr[i].index === idTarget && target.value === 'false') {
      TASK.TASKarr[i].completed = true;
      target.value = 'true';
    } else if (TASK.TASKarr[i].index === idTarget && target.value === 'true') {
      TASK.TASKarr[i].completed = false;
      target.value = 'false';
    }
  }
  setStorage();
};

export default changeBox;