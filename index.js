const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tareas = [];

function mostrarTareas() {
  return new Promise((resolve, reject) => {
    console.log('Lista de tareas:');
    tareas.forEach((tarea, index) => {
      console.log(`${index + 1}. [${tarea.estado ? 'X' : ' '}] - ${tarea.descripcion}`);
    });
    resolve();
  });
}

function agregarTarea() {
  return new Promise((resolve, reject) => {
    rl.question('Ingrese la descripción de la tarea: ', (descripcion) => {
      tareas.push({ descripcion, estado: false });
      console.log('Tarea agregada.');
      resolve();
    });
  });
}

function eliminarTarea() {
  return new Promise((resolve, reject) => {
    mostrarTareas()
      .then(() => {
        rl.question('Ingrese el número de la tarea que desea eliminar: ', (numero) => {
          const index = parseInt(numero) - 1;
          if (index >= 0 && index < tareas.length) {
            tareas.splice(index, 1);
            console.log('Tarea eliminada.');
          } else {
            console.log('Número de tarea inválido.');
          }
          resolve();
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function completarTarea() {
  return new Promise((resolve, reject) => {
    mostrarTareas()
      .then(() => {
        rl.question('Ingrese el número de la tarea que desea marcar como completada: ', (numero) => {
          const index = parseInt(numero) - 1;
          if (index >= 0 && index < tareas.length) {
            tareas[index].estado = true;
            console.log('Tarea completada.');
          } else {
            console.log('Número de tarea inválido.');
          }
          resolve();
        });
      })
      .catch((error) => {
        reject(error);
      });
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

function obtenerOpcion() {
  return new Promise((resolve, reject) => {
    rl.on('line', (line) => {
      const opcion = parseInt(line.trim());
      if (isNaN(opcion)) {
        reject(new Error('Opción inválida.'));
      } else {
        resolve(opcion);
      }
    });
  });
}

function iniciarGestionTareas() {
  return new Promise((resolve, reject) => {
    console.log('Bienvenido a la Gestión de Tareas.');
    mostrarMenu();
    obtenerOpcion()
      .then((opcion) => {
        switch (opcion) {
          case 1:
            mostrarTareas()
              .then(() => {
                iniciarGestionTareas();
              })
              .catch((error) => {
                console.error('Error:', error);
                iniciarGestionTareas();
              });
            break;
          case 2:
            agregarTarea()
              .then(() => {
                iniciarGestionTareas();
              })
              .catch((error) => {
                console.error('Error:', error);
                iniciarGestionTareas();
              });
            break;
          case 3:
            eliminarTarea()
              .then(() => {
                iniciarGestionTareas();
              })
              .catch((error) => {
                console.error('Error:', error);
                iniciarGestionTareas();
              });
            break;
          case 4:
            completarTarea()
              .then(() => {
                iniciarGestionTareas();
              })
              .catch((error) => {
                console.error('Error:', error);
                iniciarGestionTareas();
              });
            break;
          case 5:
            rl.close();
            break;
          default:
            console.log('Opción inválida.');
            iniciarGestionTareas();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        iniciarGestionTareas();
      });
  });
}

iniciarGestionTareas();
