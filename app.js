function generarPromesaCalificacion() {
    return new Promise((resolve, reject) => {
        const calificacion = Math.floor(Math.random() * 11);
        if (calificacion >= 0 && calificacion <= 10) {
            resolve(calificacion);
        } else {
            reject(new Error('La calificación generada no está dentro del rango válido.'));
        }
    });
}

generarPromesaCalificacion()
    .then(calificacion => {
        console.log(`La calificación del estudiante es: ${calificacion}`);
        if (calificacion >= 6) {
            console.log('El estudiante ha aprobado.');
        } else {
            console.log('El estudiante ha reprobado.');
        }
    })
    .catch(error => console.error(error));