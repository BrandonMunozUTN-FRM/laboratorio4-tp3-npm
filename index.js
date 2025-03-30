const yargs = require('yargs');
const fs = require('fs');

const argv = yargs
  .command('saludar', 'Muestra un saludo', {
    nombre: {
      describe: 'Nombre de la persona a saludar',
      demandOption: true,
      type: 'string'
    }
  })
  .command('despedir', 'Muestra un adiós', {
    nombre: {
      describe: 'Nombre de la persona a despedir',
      demandOption: true,
      type: 'string'
    }
  })
  .command('sumar', 'Suma dos números', {
    n1: {
      describe: 'Primer número',
      demandOption: true,
      type: 'number'
    },
    n2: {
      describe: 'Segundo número',
      demandOption: true,
      type: 'number'
    }
  })
  .command('leer', 'Lee un archivo JSON y muestra su contenido', {
    archivo: {
      describe: 'Ruta del archivo JSON',
      demandOption: true,
      type: 'string'
    }
  })
  .help()
  .argv;

if (argv._.includes('saludar')) {
  if (!argv.nombre) {
    console.log('Error: El argumento "nombre" es obligatorio.');
  } else {
    console.log(`Hola, ${argv.nombre}!`);
  }
} else if (argv._.includes('despedir')) {
  if (!argv.nombre) {
    console.log('Error: El argumento "nombre" es obligatorio.');
  } else {
    console.log(`Adiós, ${argv.nombre}!`);
  }
} else if (argv._.includes('sumar')) {
  const resultado = argv.n1 + argv.n2;
  console.log(`El resultado de la suma es: ${resultado}`);
} else if (argv._.includes('leer')) {
  fs.readFile(argv.archivo, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
    } else {
      console.log('Contenido del archivo JSON:', JSON.parse(data));
    }
  });
}
