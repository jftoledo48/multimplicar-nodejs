// Requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)){
            reject(`Ambos valores ${base} y ${limite}, deben ser números.`);
            return;
        }
        
        let data = '';

        console.log('============================='.green);
        console.log(`==Tabla del ${base} al ${limite}==`.green);
        console.log('============================='.green);

        for(let i=1; i<=limite; i++){
            console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i}\n`;
        }

        return data;
    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)){
            reject(`El valor introducido '${base}' no es un numero'`);
            return;
        }

        let data = '';

        for(let i=1; i<=limite; i++){
            console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`archivos/tabla-${base}-al-${limite}.txt`, data, (err)=>{
            if(err) 
                reject(err);
            else 
                resolve(`tabla-${base}-al-${limite}.txt`);
            //console.log(`El archivo tabla-${base}.txt ha sido creado con exito.`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}