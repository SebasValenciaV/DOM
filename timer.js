// Función flecha para crear la sección del temporizador
const createTimerSection = () => {
    const section = document.createElement('section');
    section.id = 'timerSection';

    const header = document.createElement('h2');
    header.textContent = 'Temporizador';
    section.appendChild(header);

    const display = document.createElement('div');
    display.id = 'timerDisplay';
    display.textContent = '00:00:00';
    section.appendChild(display);

    const startButton = document.createElement('button');
    startButton.textContent = 'Iniciar';
    section.appendChild(startButton);

    const pauseButton = document.createElement('button');
    pauseButton.textContent = 'Pausar';
    section.appendChild(pauseButton);

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reiniciar';
    section.appendChild(resetButton);

    // Estilos CSS
    section.style.width = '45%'; // Reducimos ligeramente el ancho al 50% del contenedor principal
    section.style.float = 'left'; // Se hace que la sección flote a la izquierda
    section.style.marginRight = '20px'; // Se añade un margen derecho para separar las secciones
    section.style.padding = '20px';
    section.style.backgroundColor = '#f7f7f7';
    section.style.borderRadius = '8px';
    section.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    header.style.color = '#333';
    display.style.fontSize = '24px';
    display.style.marginBottom = '20px';

    startButton.style.padding = '8px 16px';
    startButton.style.backgroundColor = '#4CAF50';
    startButton.style.color = '#fff';
    startButton.style.border = 'none';
    startButton.style.borderRadius = '4px';
    startButton.style.cursor = 'pointer';

    pauseButton.style.padding = '8px 16px';
    pauseButton.style.backgroundColor = '#FF5733';
    pauseButton.style.color = '#fff';
    pauseButton.style.border = 'none';
    pauseButton.style.borderRadius = '4px';
    pauseButton.style.cursor = 'pointer';

    resetButton.style.padding = '8px 16px';
    resetButton.style.backgroundColor = '#337ab7';
    resetButton.style.color = '#fff';
    resetButton.style.border = 'none';
    resetButton.style.borderRadius = '4px';
    resetButton.style.cursor = 'pointer';

    // Event listeners para los botones
    startButton.addEventListener('mouseover', function() {
        startButton.style.backgroundColor = '#45a049';
    });

    startButton.addEventListener('mouseout', function() {
        startButton.style.backgroundColor = '#4CAF50';
    });

    pauseButton.addEventListener('mouseover', function() {
        pauseButton.style.backgroundColor = '#FF8C66';
    });

    pauseButton.addEventListener('mouseout', function() {
        pauseButton.style.backgroundColor = '#FF5733';
    });

    resetButton.addEventListener('mouseover', function() {
        resetButton.style.backgroundColor = '#2e6da4';
    });

    resetButton.addEventListener('mouseout', function() {
        resetButton.style.backgroundColor = '#337ab7';
    });

    let timerInterval;
    let timerSeconds = 0;
    let timerMinutes = 0;
    let timerHours = 0;

    const updateDisplay = () => {
        display.textContent = `${String(timerHours).padStart(2, '0')}:${String(timerMinutes).padStart(2, '0')}:${String(timerSeconds).padStart(2, '0')}`;
    };

    const startTimer = () => {
        timerInterval = setInterval(() => {
            timerSeconds++;
            if (timerSeconds === 60) {
                timerSeconds = 0;
                timerMinutes++;
                if (timerMinutes === 60) {
                    timerMinutes = 0;
                    timerHours++;
                }
            }
            updateDisplay();
        }, 1000);
    };

    const pauseTimer = () => {
        clearInterval(timerInterval);
    };

    const resetTimer = () => {
        clearInterval(timerInterval);
        timerSeconds = 0;
        timerMinutes = 0;
        timerHours = 0;
        updateDisplay();
    };

    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);

    return section;
};

export { createTimerSection };
