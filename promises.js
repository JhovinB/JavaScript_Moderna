export const crearTarea=(tarea,urgencia)=>{
    return `La tarea ${tarea} tiene una urgencia ${urgencia}`;
}

/* Promises->Q Codigo funcione o que no funciones */
const aplicarDescuento = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let descuento = true;

        if (descuento) {
            resolve('Descuento aplicado');
        }else{
            reject('No se pudo aplicar el descuento');
        }
    },3000);
});
aplicarDescuento.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})
/* Promises Ajax */
const downloadUser = cantidad => new Promise( async (resolve, reject) => {
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;
    
    try {
        const dataAjax = await fetch(api);
        const results = await dataAjax.json();
        resolve(results);
    } catch (error) {
        reject(error);
    }
});
 
async function called() {
    try {
        const data = await downloadUser(5);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
called()
/* Escribir clases */
class Tarea{
    constructor(nombre,prioridad){
        this.nombre=nombre;
        this.prioridad=prioridad;
    }
    
}
class ComprasPendiente extends Tarea{
    constructor(nombre,prioridad,cantidad){
        super(nombre,prioridad);
        this.cantidad=cantidad;
    }
}
//Tareas
let tarea1= new Tarea('Aprender react','alta');
console.log(tarea1);
//Compras
let compra1= new ComprasPendiente('Leche','Urgente',6);
console.log(compra1);

