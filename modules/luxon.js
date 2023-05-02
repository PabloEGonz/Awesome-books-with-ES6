import { DateTime } from "../node_modules/luxon/src/luxon.js";
const time = document.querySelector('.localTime');

const displayTime = () => {
    let dt = DateTime.now();
    time.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);
}
export { displayTime }