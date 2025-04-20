const fs = require('fs');

// Ruta del archivo donde se guardarán las notas
const filePath = './notas.json';

// Función para agregar una nueva nota
function agregarNota(titulo, contenido) {
  let notas = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log(`✅ Nota "${titulo}" agregada.`);
}

// Función para listar todas las notas
function listarNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    if (notas.length === 0) {
      console.log('📂 No hay notas guardadas.');
    } else {
      console.log('📝 Notas guardadas:');
      notas.forEach((nota, index) => {
        console.log(`${index + 1}. ${nota.titulo}: ${nota.contenido}`);
      });
    }
  } else {
    console.log('📂 No hay archivo de notas.');
  }
}

// Función para eliminar una nota por su título
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    let notas = JSON.parse(data);

    const notasFiltradas = notas.filter((nota) => nota.titulo !== titulo);

    if (notas.length === notasFiltradas.length) {
      console.log(`⚠️ Nota con título "${titulo}" no encontrada.`);
    } else {
      fs.writeFileSync(filePath, JSON.stringify(notasFiltradas, null, 2));
      console.log(`🗑 Nota "${titulo}" eliminada.`);
    }
  } else {
    console.log('📂 No hay archivo de notas.');
  }
}

// -------------------------------------
// Control de comandos desde consola
// -------------------------------------

const comando = process.argv[2];
const titulo = process.argv[3];
const contenido = process.argv[4];

switch (comando) {
  case 'agregar':
    if (titulo && contenido) {
      agregarNota(titulo, contenido);
    } else {
      console.log('❌ Debes proporcionar título y contenido. Ejemplo:\nnode gestorNotas.js agregar "Título" "Contenido"');
    }
    break;

  case 'listar':
    listarNotas();
    break;

  case 'eliminar':
    if (titulo) {
      eliminarNota(titulo);
    } else {
      console.log('❌ Debes proporcionar el título de la nota a eliminar. Ejemplo:\nnode gestorNotas.js eliminar "Título"');
    }
    break;

  default:
    console.log('❌ Comando no reconocido. Usa:\n- agregar\n- listar\n- eliminar');
}
