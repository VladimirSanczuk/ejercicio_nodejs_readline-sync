const readline = require("readline-sync");

const registrarEstudiantes = () => {
    const cantidadEstudiantes = readline.question("Ingrese la cantidad de estudiantes: ");
    const estudiantes = [];

    for (let i=0; i< cantidadEstudiantes; i++){
        const nombre = readline.question(`Ingrese el nombre del estudiante ${i+1}: `);
        const edad = readline.question(`Ingrese la edad del estudiante ${i+1}: `);

        const estudiante = {
            nombre,
            edad
        };;

        estudiantes.push(estudiante);

    }

    mostrarListaEstudiantes(estudiantes);
};

const mostrarListaEstudiantes = (estudiantes) => {
    console.log("Lista de estudiantes registrados: ");
    estudiantes.forEach((estudiante) => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
    });
};

registrarEstudiantes();

