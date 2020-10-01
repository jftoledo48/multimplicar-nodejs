// Requireds
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(err => console.log(err));
        break;
    case 'crear':
        console.log('Crear');
        console.log(argv.base);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, `${archivo}`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('No se reconoce el comado, intente consultar node app --help');
}


// console.log(argv);

// console.log(argv.base);

// console.log(argv.limite);

//let base = 'abc';

// let argv2 = process.argv;
// let parametro = argv2[2];
// let base = parametro.split('=')[1]


// crearArchivo(base)
// .then(archivo => console.log(`Archivo creado: ${archivo}`))
// .catch(err => console.log(err));