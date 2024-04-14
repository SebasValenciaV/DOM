// Función flecha para crear la sección de la lista de tareas
const createTaskListSection = () => {
    const section = document.createElement('section');
    section.id = 'taskListSection';

    const header = document.createElement('h2');
    header.textContent = 'Listas';
    section.appendChild(header);

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Ingrese una nueva tarea';
    section.appendChild(input);

    const addButton = document.createElement('button');
    addButton.textContent = 'Agregar';
    section.appendChild(addButton);

    const taskList = document.createElement('ul');
    section.appendChild(taskList);

    // Estilos CSS
    
    // Estilos CSS
    section.style.width = '45%'; // Reducimos ligeramente el ancho al 50% del contenedor principal
    section.style.float = 'left'; // Se hace que la sección flote a la izquierda
    section.style.marginRight = '20px'; // Se añade un margen derecho para separar las secciones
    section.style.padding = '20px';
    section.style.backgroundColor = '#f7f7f7';
    section.style.borderRadius = '8px';
    section.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    header.style.color = '#333';
    input.style.width = 'calc(100% - 80px)';
    input.style.padding = '8px';
    input.style.marginRight = '10px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '4px';
    addButton.style.padding = '8px 16px';
    addButton.style.backgroundColor = '#4CAF50';
    addButton.style.color = '#fff';
    addButton.style.border = 'none';
    addButton.style.borderRadius = '4px';
    addButton.style.cursor = 'pointer';


    addButton.addEventListener('mouseover', function() {
        addButton.style.backgroundColor = '#45a049';
    });

    addButton.addEventListener('mouseout', function() {
        addButton.style.backgroundColor = '#4CAF50';
    });

    // Event listener para agregar tarea
    addButton.addEventListener('click', function() {
        const taskText = input.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
            input.value = '';
        }
    });

    return section;
    
};

export { createTaskListSection };
