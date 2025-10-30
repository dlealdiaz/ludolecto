/**
 * Juegos del Abecedario Mágico
 * Script principal para la gestión de letras y juegos interactivos
 */

// Crear estrellas decorativas en el fondo
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = Math.random() * 3 + 2 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
}

// Configuración del abecedario español en orden pedagógico
// VOCALES agrupadas, luego consonantes según dificultad de aprendizaje
const alphabet = ['VOCALES', 'M', 'P', 'S', 'T', 'L', 'N', 'D', 'R', 'F', 'B', 'V', 'G', 'J', 'C', 'Q', 'Z', 'LL', 'CH', 'H', 'K', 'Ñ', 'X', 'W', 'Y'];

// Elementos del DOM
const alphabetGrid = document.getElementById('alphabetGrid');
const gameContainer = document.getElementById('gameContainer');
const welcomeScreen = document.getElementById('welcomeScreen');
const gameTitle = document.getElementById('gameTitle');
const gameEmoji = document.getElementById('gameEmoji');

// Emojis decorativos para cada letra
const emojis = ['🎨', '🌟', '🎪', '🎯', '🏆', '🎭', '🎨', '🌈', '⭐', '🎵', '🎸', '🎹', '🎺', '🎻', '🥁', '🎤', '🎬', '🎮', '🎲', '🧩', '🎨', '🖍️', '✏️', '📚', '📖', '🎈', '🎉'];

/**
 * Configuración de URLs de los juegos de Scratch para cada letra
 * Para agregar más juegos, añade el formato: 'LETRA': 'URL_DEL_JUEGO'
 * Para VOCALES, puedes agregar dos juegos en un array
 */
const scratchGames = {
    'VOCALES': [
        'https://scratch.mit.edu/projects/1235608094/embed', // Primer juego de vocales
        'https://scratch.mit.edu/projects/1235598633/embed'  // Segundo juego de vocales
    ],
    'M': 'https://scratch.mit.edu/projects/1235081118/embed',
    'P': 'https://scratch.mit.edu/projects/1235089198/embed',
    'S': 'https://scratch.mit.edu/projects/1233841549/embed',
    'T': 'https://scratch.mit.edu/projects/1234951764/embed',
    'L': 'https://scratch.mit.edu/projects/1235080995/embed',
    'N': 'https://scratch.mit.edu/projects/1233836420/embed',
    'D': 'https://scratch.mit.edu/projects/1234948453/embed',
    'R': 'https://scratch.mit.edu/projects/1234614227/embed',
    'F': 'https://scratch.mit.edu/projects/1235627519/embed',
    'B': 'https://scratch.mit.edu/projects/1235094632/embed',
    'V': 'https://scratch.mit.edu/projects/1235427155/embed',
    'G': 'https://scratch.mit.edu/projects/1235477494/embed',
    'J': 'https://scratch.mit.edu/projects/1235152062/embed',
    'C': 'https://scratch.mit.edu/projects/1235098708/embed',
    'Q': 'https://scratch.mit.edu/projects/1235412676/embed',
    'Z': 'https://scratch.mit.edu/projects/1234597395/embed',
    'LL': 'https://scratch.mit.edu/projects/1235439431/embed',
    'CH': 'https://scratch.mit.edu/projects/1235494851/embed',
    'H': 'https://scratch.mit.edu/projects/1235414407/embed',
    'K': 'https://scratch.mit.edu/projects/1235172237/embed',
    'Ñ': 'https://scratch.mit.edu/projects/1235188120/embed',
    'X': 'https://scratch.mit.edu/projects/1235102123/embed',
    'W': 'https://scratch.mit.edu/projects/1234609947/embed',
    'Y': 'https://scratch.mit.edu/projects/1235075907/embed'
};

/**
 * Inicializar el grid del abecedario
 * Crea un botón para cada letra del alfabeto
 */
alphabet.forEach((letter, index) => {
    const btn = document.createElement('button');
    btn.className = 'letter-btn';
    
    // Clase especial para el botón de VOCALES
    if (letter === 'VOCALES') {
        btn.classList.add('vocales-btn');
    }
    
    btn.textContent = letter;
    btn.onclick = () => loadGame(letter, index);
    alphabetGrid.appendChild(btn);
});

/**
 * Cargar el juego correspondiente a una letra seleccionada
 * @param {string} letter - Letra seleccionada del abecedario
 * @param {number} index - Índice de la letra en el array
 */
function loadGame(letter, index) {
    // Ocultar pantalla de bienvenida
    welcomeScreen.style.display = 'none';
    
    // Mostrar contenedor del juego
    gameContainer.classList.add('active');
    
    // Actualizar título y emoji
    if (letter === 'VOCALES') {
        gameTitle.textContent = 'Las Vocales';
    } else {
        gameTitle.textContent = `Letra ${letter}`;
    }
    gameEmoji.textContent = emojis[index % emojis.length];
    
    // Obtener el contenedor del juego
    const gameFrame = document.querySelector('.game-frame');
    
    // Si existe un juego de Scratch para esta letra, cargarlo
    if (scratchGames[letter]) {
        // Si es un array (como VOCALES con múltiples juegos)
        if (Array.isArray(scratchGames[letter])) {
            const games = scratchGames[letter];
            gameFrame.innerHTML = `
                <div class="multiple-games">
                    <div class="game-selector">
                        <button class="game-selector-btn active" onclick="switchGame('${letter}', 0)">Juego 1</button>
                        <button class="game-selector-btn" onclick="switchGame('${letter}', 1)">Juego 2</button>
                    </div>
                    <div id="game-display">
                        <iframe 
                            src="${games[0]}" 
                            allowtransparency="true" 
                            frameborder="0" 
                            scrolling="no" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            `;
        } else {
            // Juego único
            gameFrame.innerHTML = `<iframe 
                src="${scratchGames[letter]}" 
                allowtransparency="true" 
                frameborder="0" 
                scrolling="no" 
                allowfullscreen>
            </iframe>`;
        }
    } else {
        // Mostrar placeholder para letras sin juego configurado
        gameFrame.innerHTML = `
            <div class="placeholder-game">
                <div class="emoji">🎮</div>
                <div>
                    <strong>Juego próximamente</strong>
                    <p style="font-size: 0.9em; margin-top: 15px; opacity: 0.9;">
                        Este juego estará disponible pronto
                    </p>
                </div>
            </div>
        `;
    }
    
    // Actualizar estado visual de los botones
    document.querySelectorAll('.letter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === letter) {
            btn.classList.add('active');
        }
    });

    // Hacer scroll suave hacia el contenedor del juego
    gameContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/**
 * Cambiar entre juegos múltiples (para VOCALES)
 * @param {string} letter - Letra con múltiples juegos
 * @param {number} gameIndex - Índice del juego a mostrar
 */
function switchGame(letter, gameIndex) {
    const games = scratchGames[letter];
    const gameDisplay = document.getElementById('game-display');
    
    // Actualizar iframe con el nuevo juego
    gameDisplay.innerHTML = `
        <iframe 
            src="${games[gameIndex]}" 
            allowtransparency="true" 
            frameborder="0" 
            scrolling="no" 
            allowfullscreen>
        </iframe>
    `;
    
    // Actualizar botones activos
    document.querySelectorAll('.game-selector-btn').forEach((btn, idx) => {
        btn.classList.toggle('active', idx === gameIndex);
    });
}

