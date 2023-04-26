const promesaExitosa = true;
const primeraPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaExitosa) {
            resolve('ToDo Ok');
        } else {
            reject('Error');
        }
    }, 3000);
});
const manejoPromesaExitosa = (valor) => {
    console.log(valor);
}
const manejoPromesaError = (elerror) => {
    console.log(elerror);
}
primeraPromesa.then(manejoPromesaExitosa, manejoPromesaError);