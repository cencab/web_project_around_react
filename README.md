# Around The U.S. (React Application)

_Language / Idioma:_ [Español](#descripción-del-proyecto) | [English](#project-description)

**🔗 Ver el proyecto en vivo (live project):** (https://cencab.github.io/web_project_around_react/)

**🖥️ Vista Previa del Proyecto (Project Preview):**
![Vista de escritorio del proyecto Around](./src/images/screenshot.png)

---

## Descripción del Proyecto

Este proyecto es la evolución de la aplicación interactiva "Around The U.S.", migrada por completo desde una arquitectura imperativa en Vanilla JS hacia un entorno declarativo y moderno con **React** y **Vite**. En esta fase de desarrollo, la aplicación ha sido integrada con una **REST API** real, permitiendo operaciones CRUD completas. Además, se refactorizó la arquitectura para gestionar datos globales mediante **Context API** y se aplicó el patrón de "levantamiento de estado" (_Lifting State Up_) para una gestión de datos centralizada y eficiente.

## Funcionalidades

El sitio mantiene e incrementa sus capacidades interactivas bajo la filosofía de React:

- **Integración con REST API:** Comunicación asíncrona con el servidor de TripleTen para la carga inicial de tarjetas, actualización de perfil de usuario, gestión de "Me gusta" y eliminación de tarjetas.
- **Context API (`CurrentUserContext`):** Implementación de un contexto global para inyectar los datos del usuario actual y las funciones de actualización en cualquier componente de la jerarquía, evitando el _prop drilling_.
- **Levantamiento de Estado (_Lifting State Up_):** Toda la lógica de control de ventanas emergentes y manejo del arreglo de tarjetas se centralizó en el componente raíz (`App.jsx`), distribuyendo los datos hacia los componentes hijos (`Main`, `Card`) mediante _props_.
- **Componentes Controlados y No Controlados:** Uso del hook `useState` para gestionar y validar de forma reactiva los inputs del formulario de edición de perfil y creación de tarjetas, y el hook `useRef` para el formulario de actualización de avatar.
- **Renderizado Dinámico de Galería:** Uso del método `.map()` sobre datos asíncronos reales para proyectar componentes `<Card />` dinámicos, garantizando la optimización del DOM mediante llaves (`key`) únicas.
- **Ciclo de Vida Limpio:** El desmontaje y las peticiones iniciales están controladas de manera declarativa con el hook `useEffect`, asegurando que la carga de datos ocurra solo en el montaje del componente principal.

## Tecnologías y Herramientas Utilizadas

- **React (v18+):** Biblioteca principal para la construcción de la interfaz mediante componentes funcionales, Hooks (`useState`, `useEffect`, `useRef`, `useContext`) y Context API.
- **Vite:** Herramienta de construcción y entorno de desarrollo rápido encargado del empaquetado y hot-reload.
- **JSX:** Sintaxis extendida de JavaScript para la estructuración semántica y reactiva del marcado.
- **CSS3:** Estilos organizados bajo la estricta metodología **BEM** y diseño completamente responsivo adaptado para escritorio, tabletas y móviles.
- **ESLint:** Linter y motor de análisis estático configurado bajo los estándares de la industria.

---

## Project Description

This project represents the complete evolution of the "Around The U.S." interactive application, fully migrated from an imperative Vanilla JS architecture into a modern, declarative environment using **React** and **Vite**. In this development phase, the application has been seamlessly integrated with a live **REST API**, enabling full CRUD operations. The architecture was further refactored to manage global user data through the **Context API** and implemented the "Lifting State Up" pattern for centralized and highly efficient data management.

## Features

The application maintains and enhances its interactive capabilities under React's declarative philosophy:

- **REST API Integration:** Asynchronous server communication for initial card rendering, user profile updates, like toggling, and card deletion workflows.
- **Context API (`CurrentUserContext`):** Engineered a global context provider to seamlessly inject current user data and updater functions deep into the component tree, successfully bypassing prop drilling.
- **Lifting State Up:** Centralized popup visibility states and the main card array logic within the root component (`App.jsx`), efficiently distributing strictly necessary data down to child components (`Main`, `Card`) via props.
- **Controlled & Uncontrolled Components:** Implemented the `useState` hook to strictly control and reactively validate profile and new-card form inputs, alongside the `useRef` hook for direct DOM referencing in the avatar update form.
- **Dynamic Gallery Rendering:** Utilized the `.map()` array method over live asynchronous data to map dynamic `<Card />` components, strictly optimized through unique `key` props for DOM tree efficiency.
- **Clean Lifecycle Workflows:** Initial data fetching and side effects are declaratively managed via the `useEffect` hook, ensuring API calls fire exactly once during the root component's mount phase.

## Architecture & Technologies Used

- **React (v18+):** Core UI library powered entirely by functional components, React Hooks (`useState`, `useEffect`, `useRef`, `useContext`), and Context API.
- **Vite:** Next-generation frontend tooling providing lightning-fast dev server performance and streamlined production bundling.
- **JSX:** XML-like syntax extension to build reactive layout semantics inside JavaScript.
- **CSS3:** Layout formatting strictly organized under **BEM** methodology with full responsive support for Desktop, Tablet, and Mobile devices.
- **ESLint:** Static analysis tooling calibrated under strict quality guidelines to ensure standardized, high-quality code.
