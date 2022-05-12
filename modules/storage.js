import TASK from './tarea.js';

export const setStorage = () => {
  localStorage.setItem('task', JSON.stringify(TASK.TASKarr));
};

export const getStorage = () => {
  if (JSON.parse(localStorage.getItem('task'))) {
    TASK.TASKarr = JSON.parse(localStorage.getItem('task'));
  } else {
    TASK.TASKarr = [];
  }
};