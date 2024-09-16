# Biblioteca de Libros 📚

Esta es una aplicación de biblioteca de libros que permite a los usuarios agregar, buscar y eliminar libros de su lista. Los datos de los libros se almacenan en `localStorage`, lo que permite mantener la información incluso después de cerrar el navegador. La aplicación incluye validación de formularios con mensajes de error accesibles y un diseño simple usando Bootstrap.

## Características 🌟

- Añadir libros con título, autor y ISBN.
- Validación de campos (resalta en rojo cuando los datos son incorrectos o faltan).
- Guardado de libros en `localStorage` para persistencia de datos.
- Búsqueda en tiempo real por título.
- Eliminar libros de la lista.

## Tecnologías Utilizadas 🛠

- **HTML5**: Estructura de la aplicación.
- **CSS3** (Bootstrap): Para el diseño responsivo y estilización de la interfaz.
- **JavaScript (ES6)**: Lógica de la aplicación, validación y manipulación del DOM.
- **localStorage**: Para almacenar los libros localmente.

## Llena el formulario con el título, autor y el ISBN del libro.
Presiona el botón "Agregar Libro" para añadirlo a la lista.
Si el libro se añade correctamente, será visible en la lista debajo del formulario.
Para buscar un libro, escribe el título en la barra de búsqueda y la lista se filtrará automáticamente.
Para eliminar un libro, presiona el botón "Eliminar" junto a cada libro en la lista.

## Validaciones de Formulario ✅
El campo título no puede estar vacío.
El campo autor no puede estar vacío.
El campo ISBN debe tener exactamente 13 caracteres.
Si un campo no cumple con estos requisitos, el borde se marcará en rojo, se mostrará un ícono de error y aparecerá un mensaje descriptivo para que el usuario pueda corregirlo.

