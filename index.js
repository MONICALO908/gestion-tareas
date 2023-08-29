const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tareas = [];

function mostrarTareas() {
  console.log('Lista de tareas:');
  tareas.forEach((tarea, index) => {
    console.log(`${index + 1}. [${tarea.estado ? 'X' : ' '}] - ${tarea.descripcion}`);
  });
}

function agregarTarea() {
  rl.question('Ingrese la descripción de la tarea: ', (descripcion) => {
    tareas.push({ descripcion, estado: false });
    console.log('Tarea agregada.');
    mostrarTareas();
    rl.prompt();
  });
}

function eliminarTarea() {
  mostrarTareas();
  rl.question('Ingrese el número de la tarea que desea eliminar: ', (numero) => {
    const index = parseInt(numero) - 1;
    if (index >= 0 && index < tareas.length) {
      tareas.splice(index, 1);
      console.log('Tarea eliminada.');
    } else {
      console.log('Número de tarea inválido.');
    }
    mostrarTareas();
    rl.prompt();
  });
}

function completarTarea() {
  mostrarTareas();
  rl.question('Ingrese el número de la tarea que desea marcar como completada: ', (numero) => {
    const index = parseInt(numero) - 1;
    if (index >= 0 && index < tareas.length) {
      tareas[index].estado = true;
      console.log('Tarea completada.');
    } else {
      console.log('Número de tarea inválido.');
    }
    mostrarTareas();
    rl.prompt();
  });
}

function mostrarMenu() {
  console.log('\n===== Gestión de Tareas =====');
  console.log('1. Mostrar tareas');
  console.log('2. Agregar tarea');
  console.log('3. Eliminar tarea');
  console.log('4. Completar tarea');
  console.log('5. Salir');
  rl.prompt();
}

rl.on('line', (line) => {
  const opcion = parseInt(line.trim());
  switch (opcion) {
    case 1:
      mostrarTareas();
      break;
    case 2:
      agregarTarea();
      break;
    case 3:
      eliminarTarea();
      break;
    case 4:
      completarTarea();
      break;
    case 5:
      rl.close();
      break;
    default:
      console.log('Opción inválida.');
      mostrarMenu();
  }
});

console.log('Bienvenido a la Gestión de Tareas.');
mostrarMenu();
