import { createTaskListSection } from './taskList.js';
import { createTimerSection } from './timer.js';
import { createHeader} from './header.js';


document.addEventListener('DOMContentLoaded', () => {
    const headerSection = createHeader();
    const taskListSection = createTaskListSection();
    const timerSection = createTimerSection();
    const body  = document.body;
    body.style.backgroundColor = '#228B22'; // Color de fondo gris claro

    const main = document.getElementById('main');
    
    main.appendChild(headerSection);
    main.appendChild(taskListSection);
    main.appendChild(timerSection);
    

});
