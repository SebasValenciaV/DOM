// Función flecha para crear la sección de encabezado
const createHeader = () => {
    // Crear el contenedor de la sección
    const section = document.createElement('section');
    section.id = 'headerSection';

    // Crear el encabezado
    const header = document.createElement('h2');
    header.textContent = 'Mi Programa de Tareas - Sebastian Valencia Vargas ';
    header.style.color = '#333';
    header.style.fontSize = '24px';
    header.style.marginBottom = '20px';
    section.appendChild(header);

    // Crear la descripción del programa
    const description = document.createElement('p');
    description.textContent = 'Este DOM te ayuda a gestionar tus tareas de manera eficiente usando un cronometro.';
    description.style.fontSize = '18px';
    description.style.color = '#666';
    section.appendChild(description);

    // Estilos CSS para la sección
    section.style.maxWidth = '600px';
    section.style.margin = '20px auto';
    section.style.padding = '20px';
    section.style.backgroundColor = '#f7f7f7';
    section.style.borderRadius = '8px';
    section.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    section.style.border = '1px solid #ddd';
    section.style.fontFamily = 'Arial, sans-serif';

    return section;
};

export { createHeader };
