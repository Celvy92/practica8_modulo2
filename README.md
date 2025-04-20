# 🗂 Práctica 8: Gestor de Notas Personales en Node.js

## 📘 Descripción

Este proyecto consiste en un **gestor de notas personales** desarrollado con **Node.js**, utilizando el módulo `fs` para manejar archivos. Permite al usuario agregar, listar y eliminar notas almacenadas en un archivo `notas.json`.

Es una herramienta sencilla para practicar el manejo de archivos y comprender cómo interactuar con el sistema de archivos desde Node.js.

---

## 🎯 Objetivo

Practicar la lectura, escritura, verificación y eliminación de archivos en Node.js, utilizando el módulo `fs`, para consolidar el conocimiento del manejo de archivos en el entorno backend.

---

## ⚙️ Funcionalidades

- ✅ **Agregar Nota**: Crea una nueva nota con título y contenido.
- 📋 **Listar Notas**: Muestra todas las notas guardadas.
- 🗑 **Eliminar Nota**: Elimina una nota específica según su título.

---

## 📁 Estructura del Proyecto

practica8_gestorNotas/ │ ├── gestorNotas.js # Archivo principal con la lógica del gestor de notas ├── notas.json # Archivo donde se almacenan las notas en formato JSON └── README.md # Documentación del proyecto

---

## 💻 Uso

### 1. Instalar Node.js
Asegúrate de tener Node.js instalado. Puedes verificarlo con:

```bash
node -v

node gestorNotas.js agregar "Título de la nota" "Contenido de la nota"
node gestorNotas.js listar
node gestorNotas.js eliminar "Título de la nota"
[
  {
    "titulo": "Ejemplo",
    "contenido": "Esta es una nota de ejemplo"
  }
]
🙋‍♀️ Autor

Celeste Vianey Hernández Arauz
GitHub - Celvy92
