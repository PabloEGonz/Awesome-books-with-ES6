import { DateTime } from './luxon/src/luxon.js';

const time = document.querySelector('.localTime');

const displayTime = () => {
  const dt = DateTime.now();
  time.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);
};
export { displayTime, time };