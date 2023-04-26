function generarPromesaCalificacion() {
    return new Promise((resolve, reject) => {
        const calificacion = Math.floor(Math.random() * 11);
        resolve(calificacion);
    });
}

generarPromesaCalificacion()
    .then(calificacion => {
        console.log(`La calificación del estudiante es: ${calificacion}`);
        if (calificacion >= 6) 
        {
            console.log('El estudiante ha aprobado.');
        } 
        else 
        {
            console.log('El estudiante ha reprobado.');
        }
    })
    .catch(error => console.error(error));