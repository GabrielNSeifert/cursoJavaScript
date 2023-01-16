function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Olá');
            resolve();
        }, 2000);
    });
}

export default async function () {
    await promise();
    console.log('Terminado');
}