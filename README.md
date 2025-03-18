# Microproyecto 2 - Interfaz de Usuario con React y Firebase

## Antes de comenzar
Asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (versión 14.0 o superior)
- [npm](https://www.npmjs.com/) (gestor de paquetes de Node.js, se instala automáticamente con Node.js)

## Descripción del Proyecto
Este proyecto consiste en desarrollar la interfaz de usuario para las principales vistas de una aplicación. El microproyecto se centra en tres tareas principales:

1. **Pantalla de inicio de sesión (Login)**: Crear una interfaz de inicio de sesión con opciones de inicio mediante Google y Facebook, utilizando Firebase Authentication para manejar la autenticación de los usuarios.
2. **Página de inicio (Home)**: Diseñar la página principal de la aplicación con la información relevante para el usuario.
3. **Vista adicional**: Desarrollar una vista adicional relevante, como una página de destinos o reservas, con una interfaz intuitiva y funcional.

## Funcionalidades

### 1. Pantalla de Inicio de Sesión
- Autenticación de usuarios mediante correo electrónico y contraseña.
- Opción de inicio de sesión con Google y Facebook utilizando Firebase Authentication.
- Manejo de estados de autenticación:
  - **Cargando**: Se muestra un indicador de carga mientras se realiza la autenticación.
  - **Éxito**: Redirección a la página principal al iniciar sesión correctamente.
  - **Error**: Mensajes claros de error si ocurre un fallo en el proceso de inicio de sesión.

### 2. Página de Inicio (Home)
- Presenta la información más relevante de la aplicación.
- Diseño atractivo y funcional.
- Estructura clara con los principales elementos informativos.

### 3. Vista Adicional
- Ejemplo: **Página de destinos**, donde se describen rutas, puntos de interés, fotos y detalles sobre la dificultad y duración de las excursiones.
- Los usuarios pueden navegar a esta vista desde la página principal.

## Tecnologías
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Firebase**: Plataforma para desarrollar aplicaciones móviles y web, utilizada para la autenticación y base de datos.
- **Vite**: Herramienta para bundling y desarrollo rápido de aplicaciones con soporte para hot module replacement.
- **CSS**: Estilos para hacer que la interfaz sea visualmente atractiva y responsive.
- **ESLint**: Herramienta para identificar y reportar patrones en el código JavaScript.


# React + Vite Template
Este template proporciona una configuración mínima para hacer funcionar **React** con **Vite**, con soporte para **Hot Module Replacement (HMR)** y algunas reglas de **ESLint**.

### Plugins oficiales disponibles:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Utiliza [Babel](https://babeljs.io/) para **Fast Refresh**.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Utiliza [SWC](https://swc.rs/) para **Fast Refresh**.

### Expanding the ESLint Configuration
If you are developing a production application, we recommend using **TypeScript** and enabling type-aware lint rules. This can help catch potential errors during development, leading to more reliable and maintainable code.

You can check out the [TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate **TypeScript** and use [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Instalación
Para ejecutar este proyecto localmente, sigue los siguientes pasos:

1. Clona el repositorio:

    ```bash
    git clone <url_del_repositorio>
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd nombre_del_proyecto
    ```

3. Instala las dependencias necesarias:

    ```bash
    npm install
    ```

4. Ejecuta el servidor de desarrollo:

    ```bash
    npm run dev
    ```

5. Abre la aplicación en tu navegador en `http://localhost:5173`.