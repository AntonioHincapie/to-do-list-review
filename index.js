// import _ from 'lodash';
import './style.css';
import { clean, refresh } from './modules/variables.js';
import printTasks from './modules/printtasks.js';
import clearAll from './modules/cleancompleted.js';

window.onload = printTasks();

refresh.addEventListener('click', () => {
  document.location.reload(true);
});

clean.addEventListener('click', () => {
  clearAll();
  printTasks();
});