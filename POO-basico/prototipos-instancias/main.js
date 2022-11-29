//OBJETO LITERAL
const tomas = {
  name: "Tomas",
  age: 30,
  cursosAprobados: ["Curso Definitivo HTML y CSS", "Curso Practico HTML y CSS"],
  //Creemos un metodo para tomas
  aprobarCurso(nuevoCursito) {
    // lo que hace this es hacer referencia al mismo objeto en el que estamos en este caso el objeto tomas.
    this.cursosAprobados.push(nuevoCursito);
  },
};
// Hacer que Tomas apruebe otro curso

// PROTOTIPO
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // this.aprobarCurso = function (nuevoCursito){
  //   this.cursosAprobados.push(nuevoCursito)
  // }
}
//Creemos un metodo para nuestro prototipo Student por fuera de la funcion o prototipo Student.
Student.prototype.aprobarCurso = function (nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
};

//Creemos una instancia del prototipo Student
const juanita = new Student("Juanita Alejandra", 15, [
  "Curso Introduccion de Videojuegos",
  "Curso de creacion de personajes",
]);

//PROTOTIPOS CON LA SINTAXIS DE CLASES

// Javascritp es un lenguage orientado a objetos pero no esta basado en clases como la mayoria de los lenguages sino que esta basado en Prototipos.
// Las clases en JS son una sintaxis mas amigable para trabajar con prototipos, es decir las clases en JS son prototipos por dentro.

//Estas clases son una sintaxis mas moderna de un prototipo como el de arriba Student()
class Student2 {
  // el metodo contructor es el metodo que se ejecuta basicamente cuando llamemos a los parentesis al crear nuestra instancia de prototipo (de clase en este caso),como cuando llamamos a la instancia const juanita = new Student(..... estos parametros son los que va a ejecutar el constructor     .....).

  constructor(name, age, cursosAprobados) {
    //this hace referencia a nuestra clase prototipo Student2.
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
  //creemos un metodo dentro de nuestra clase.
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

const pipe = new Student2("Felipe", 28, [
  "Curso de analisis de negocios para datos",
  "Principio de visualizacion de datos para BI",
]);

//Otra forma de crear Prototipo de clase.
class Student3 {
  constructor({
    name,
    cursosAprobados = [],
    age,
    // twiter,
    // instagram,
    // facebook,
    email,
  }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}
//instancia del prototipo Student3
const tompi = new Student3({
  email: "tomas@gmail.com",
  age: 20,
  name: "Tomas Felipe",
});
