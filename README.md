# 🛒 E-commerce SPA con React

> Proyecto Final - Curso React JS (Comisión 69585)  
> **Alumno:** Tomás Orti  
> **Institución:** Coderhouse  
> **Año:** 2024

---

## 🚀 Objetivo del Proyecto

Desarrollar el front-end de una **Single Page Application (SPA)** de tipo **e-commerce** utilizando React. La aplicación incluye:

- Listado dinámico y detalle de productos
- Sistema de navegación completo y fluido
- Carrito de compras funcional y persistente
- Conexión con **Firebase / Firestore**
- Experiencia de usuario optimizada y responsive

---

## 📦 Tecnologías y Dependencias

### 📁 Dependencias Principales

```json
"dependencies": {
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.5.1",
  "react-bootstrap": "^2.10.9",
  "bootstrap": "^5.3.5",
  "firebase": "^11.6.0",
  "react-bootstrap-icons": "^1.11.5",
  "sweetalert2": "^11.19.1"
}
```

### 🧪 Dependencias de Desarrollo
```json
"devDependencies": {
  "@vitejs/plugin-react": "^4.3.4",
  "eslint": "^9.22.0",
  "typescript": "^5.3.3",
  "vite": "^6.3.1"
}
```

## 📂 Estructura del Proyecto

```plaintext
/src
  /components
    /Cart
      ├── CartContainer.jsx
      └── CartWidget.jsx
    /Item
      ├── Item.jsx
      ├── ItemCount.jsx
      ├── ItemDetail.jsx
      └── ItemList.jsx
      └── ItemListContainer.jsx
    /Nav
      └── NavBar.jsx
    /Checkout
      └── Checkout.jsx
  /context
    └── CartProvider.jsx
    └── CartContext.js
    └── useCart.js
  /css
    ├── Item.css
    └── ItemCount.css
    └── ItemDetail.css
    └── Navbar.css
  /firebase
    └── config.js
    └── db.js
  ├── App.js
  └── main.jsx
```

## ✨ Funcionalidades Implementadas

### 🛍️ Productos
- ItemListContainer: Renderizado dinámico de productos
- ItemDetailContainer: Vista detallada
- ItemCount: Control de cantidad y validaciones de stock
- Renderizado condicional para estados sin stock

### 🧭 Navegación
- SPA con React Router DOM v6
- NavBar con categorías dinámicas
- Navegación contextual y breadcrumbs

### 🛒 Carrito
- Context API para estado global
- Persistencia de productos en sesión
- Cálculo de subtotal y total
- CartWidget con contador visible

### 🔥 Firebase
- Integración con Firestore
- Colección dinámica de productos
- Registro de órdenes de compra
- Filtros por categoría

### 🎨 Diseño
- Bootstrap 5 y React-Bootstrap para estilo base
- Íconos con React-Bootstrap-Icons
- CSS modular por componente
- Diseño 100% responsive

## ✅ Requisitos Cumplidos

✔️ Componentes contenedores y presentacionales

✔️ Manejo de estado global (Context API)

✔️ Routing con React Router DOM

✔️ Integración completa con Firebase / Firestore

✔️ Validaciones de stock en carrito

✔️ Feedback visual con SweetAlert2

✔️ Generación y guardado de órdenes

✔️ Buenas prácticas, código modular y documentado

## 📜 Licencia
Proyecto desarrollado como trabajo final para el curso de React JS en Coderhouse.

© 2024 - Tomás Orti