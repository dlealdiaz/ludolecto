# 🎮 Juegos del Abecedario Mágico

Una aplicación web educativa e interactiva para aprender el abecedario español mediante juegos de Scratch.

## 📋 Descripción

**Juegos del Abecedario Mágico** es una plataforma web diseñada para niños que combina un diseño colorido y atractivo con juegos interactivos creados en Scratch. Cada letra del abecedario tiene su propio juego educativo que ayuda a reforzar el aprendizaje de manera divertida.

## ✨ Características

- 🎨 **Diseño colorido y animado**: Interfaz moderna con gradientes arcoíris y animaciones suaves
- 🌟 **Efectos visuales**: Estrellas parpadeantes y transiciones elegantes
- 📱 **Diseño responsivo**: Se adapta perfectamente a móviles, tabletas y escritorio
- 🎮 **Integración con Scratch**: Juegos educativos embebidos directamente en la aplicación
- 🔤 **Abecedario completo**: Incluye todas las letras del español, incluyendo la Ñ
- ⚡ **Navegación intuitiva**: Interfaz fácil de usar para niños

## 📁 Estructura del Proyecto

```
Project-Letters/
│
├── index.html          # Página principal HTML
├── styles.css          # Estilos CSS del proyecto
├── script.js           # Lógica JavaScript
└── README.md           # Documentación del proyecto
```

## 🚀 Cómo Ejecutar el Proyecto

### Opción 1: Abrir directamente el archivo HTML

1. Navega hasta la carpeta del proyecto
2. Haz doble clic en `index.html`
3. El archivo se abrirá en tu navegador predeterminado

### Opción 2: Usar un servidor local (recomendado)

#### Con Python (si lo tienes instalado):

```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

Luego abre tu navegador y visita: `http://localhost:8000`

#### Con Node.js (usando npx):

```bash
npx http-server -p 8000
```

Luego abre tu navegador y visita: `http://localhost:8000`

#### Con VS Code:

1. Instala la extensión "Live Server"
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

## 🎯 Cómo Usar la Aplicación

1. **Inicio**: Al abrir la aplicación verás una pantalla de bienvenida
2. **Selección de letra**: Haz clic en cualquier letra del abecedario
3. **Juego**: El juego correspondiente a esa letra se cargará automáticamente
4. **Cambiar de letra**: Puedes hacer clic en otra letra en cualquier momento

## 🎨 Personalización

### Agregar más juegos de Scratch

Para agregar juegos de Scratch a otras letras, edita el archivo `script.js`:

1. Abre `script.js`
2. Busca el objeto `scratchGames`
3. Agrega nuevas letras con sus URLs de Scratch:

```javascript
const scratchGames = {
    'VOCALES': [
        'https://scratch.mit.edu/projects/TU_ID_1/embed',
        'https://scratch.mit.edu/projects/TU_ID_2/embed'
    ],
    'L': 'https://scratch.mit.edu/projects/1235080995/embed',
    'M': 'https://scratch.mit.edu/projects/TU_ID_AQUI/embed',
    'P': 'https://scratch.mit.edu/projects/TU_ID_AQUI/embed',
    // Agrega más letras aquí...
};
```

### Cómo obtener la URL de un juego de Scratch

1. Ve a tu proyecto en Scratch
2. Copia el ID del proyecto desde la URL (ej: `1235080995`)
3. Usa el formato: `https://scratch.mit.edu/projects/ID_DEL_PROYECTO/embed`

### Botón Especial de VOCALES

El botón "VOCALES" es especial:
- Ocupa **dos espacios** en el grid para destacarse
- Tiene un **gradiente arcoíris** animado (los 5 colores de las vocales)
- Permite **dos juegos** (Juego 1 y Juego 2) para trabajar las vocales
- Los usuarios pueden **alternar** entre ambos juegos con botones elegantes

Para configurar los juegos de vocales, reemplaza las URLs en el array de VOCALES con las URLs reales de tus proyectos de Scratch.

### Personalizar colores y estilos

Todos los estilos están en el archivo `styles.css`. Puedes modificar:

- Colores del gradiente de fondo
- Tamaños de fuente
- Animaciones
- Colores de las letras
- Y mucho más

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura de la página
- **CSS3**: Estilos y animaciones
- **JavaScript (Vanilla)**: Lógica e interactividad
- **Scratch**: Plataforma de juegos educativos

## 📱 Compatibilidad

- ✅ Chrome/Edge (última versión)
- ✅ Firefox (última versión)
- ✅ Safari (última versión)
- ✅ Opera (última versión)
- ✅ Dispositivos móviles (iOS y Android)

## 🔧 Requisitos

- Navegador web moderno con soporte para HTML5 y CSS3
- Conexión a Internet (para cargar los juegos de Scratch)

## 📝 Notas Importantes

- Los juegos de Scratch requieren conexión a Internet
- Para mejor rendimiento, se recomienda usar un servidor local
- El proyecto es totalmente gratuito y de código abierto

## 🎓 Ideal Para

- 👶 Niños en edad preescolar
- 📚 Escuelas y centros educativos
- 👨‍👩‍👧‍👦 Padres que educan en casa
- 🏫 Profesores de educación infantil

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

1. Haz un fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/mejora`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Añade nueva función'`)
5. Haz push a la rama (`git push origin feature/mejora`)
6. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

## 👨‍💻 Autor

Desarrollado con ❤️ para el aprendizaje de los niños

## 🐛 Reporte de Problemas

Si encuentras algún problema o tienes sugerencias, por favor abre un issue en el repositorio del proyecto.

---

¡Disfruta aprendiendo el abecedario de forma mágica! ✨🎮📚

