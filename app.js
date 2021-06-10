import {crearTarea} from './promises.js';
const task= crearTarea('Pasear al perro','media');
console.log(task);
/* Crear Variables modificables */
var ap=true;
ap=false;
let number = 20;
number=110;
console.log(number);
/* Variable no modificable */
const name='Jhovin';
console.log("Hola "+name);
/* Scope->una variable del codigo
esta disponible o no*/
let musica ="Rock";
if (musica) {
    let musica ='Amen';
    console.log('Dentro del IF: ',musica);
}
console.log('Fuera del IF: ',musica);
/* Templates Strings */
const trabajo="Programador";
const lugar ="Everis";
/* Concatenar */
//V. Antes
console.log('Trabajo: '+trabajo+',Lugar: '+lugar);
//V. Nueva
console.log(`Trabajo: ${trabajo}, Lugar: ${lugar}`);
/* Concatenacion Multiple */
const contenedorApp=document.querySelector('#app');
let html=`<ul>
            <li>Trabajo: ${trabajo}</li>
            <li>Lugar: ${lugar}</li>
            </ul>`;
contenedorApp.innerHTML=html;
/*Function declaration*/
function saludar(curso) {
    console.log('Bienvenido '+curso);
}
saludar('Jhovin');
/* Function expression */
const cliente =function(nombreCliente) {
    console.log('Mostrando cliente '+nombreCliente);
}
cliente('Jhovin');
/* Parametros por default */
function  actividad(deporte,edad) {
    console.log(`El ${deporte}, tiene ${edad} años de trayectoria`);
    
}
actividad('futbol peruano','40');
/* arrow function */
let viajando = destino => {
    return `Viajando a la ciudad ${destino}`;
}
let viaje;
viaje = viajando('Madrid');
viaje = viajando('Barcelona');
console.log(viaje);
/* Objetos
Object Literal */
const persona={
    curso:'Maho',
    profesion:'Software',
    edad:23
}
console.log(persona);
// console.log(persona.curso);
// console.log(persona['profesion']);
/* Object Constructor */
function Tarea(donar,tipo) {
    this.donar=donar;
    this.tipo=tipo;
}
//crear tarea
const tarea1= new Tarea('Sangre','Urgente');
const tarea2= new Tarea('Js','Media');
console.log(tarea1);
// function mostrarInformacion(tarea,prioridad){
//     return `La tarea ${tarea} tiene prioridad ${prioridad}`;
// }
// const mostrarInfo=mostrarInformacion(tarea1.donar,tarea1.tipo);
// console.log(mostrarInfo);
// const mostrarCliente=mostrarInformacion(persona.curso,persona.profesion);
// console.log(mostrarCliente);
/* Prototypes */
Tarea.prototype.mostrarInformacionTarea= function() {
    return `La tarea ${this.donar} tiene prioridad ${this.tipo}`;
}
console.log(tarea1.mostrarInformacionTarea());
console.log(tarea2.mostrarInformacionTarea());
/* Destructuring de objects
->Como extraes valores de un objeto*/
const aprendiendoJS={
    version:{
        nueva:'ES6',
        anterior:'ES5'
    },
    frameworks:['angularjs','vuejs','reactjs']
}
let {frameworks}=aprendiendoJS;
console.log(frameworks);
/* Object literal enhancement
->para poner juntos */
const banda = "Amen";
const genero = "rock";
const canciones =['libre','Por amor']
const amen= {banda,genero,canciones};
console.log(amen);
/* Metodos o funciones en un objeto */
const person={
    curso:'Tormenta',
    musica: 'Chicha',
    mostrar:function() {
        console.log(`La cancion ${this.curso} es una ${musica}`);
    }
}
person.mostrar();
//Object keys
console.log(Object.keys(person))
/* Arrays */
const carrito =['Prod 1','Prod 2','Prod 3'];
carrito.map(producto=>{
    return 'El producto es '+producto;
});
/* Sprear operator */
let lenguajes =['java','python','php'];
let framework =['ReactJs','Laravel','Django'];
let combinacion =[...lenguajes,...framework];
console.log(combinacion);
let [ultimo]=[...lenguajes].reverse();
console.log(ultimo);
//spread en function
function suma(a,b,c) {
    console.log(a+b+c);
}
const numeros = [1,2,3];
suma(...numeros);
/* Metodos en arreglos */
const cursos =[
    {curso:'java',tiempo:12},
    {curso:'python',tiempo:18},
    {curso:'go',tiempo:24},
    {curso:'php',tiempo:28},
]
//Filter
const mayorTiempo= cursos.filter(curso=>{
    return curso.tiempo > 20;
});
console.log(mayorTiempo);
//Find
const cur= cursos.find(c=>{
    return c.curso=='java';
});
console.log('Q tiempo me toma aprender java: '+cur.tiempo);
//reduce
let total = cursos.reduce((tiempoTotal,course)=>{
    return tiempoTotal+course.tiempo;
},0);
console.log(total);


