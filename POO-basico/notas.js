// QUE SON LOS OBJETOS EN JAVASCRIPT

// const students_platzirank = ["tomas", "felipe", "maria", "carlos"];

//Objetos literales en Javascript
const students = {
  Tomas: 110,
  Felipe: 300,
  Maria: 150,
  Carlos: 0,
};
// Output: me muestra una propiedad asi : [[Prototype]]: Object
// instancia del prototipo Object
// los objetos literales NOOO son lo mismo que objetos de la programacion orientada a objetos (instancias de clases o prototipos)!!!!

// Javascript es un lenguaje orientado a objetos basado en prototipos.
//usamos la palabra reservada this para guardar nuestros atributos (name,age,points)
function Student() {
  this.name = "Nombre";
  this.age = 18;
  this.point = 750;
}

const juanita = new Student();
//Output: me muestra una propiedad asi : [[Prototype]]: Object
// instancia del prototipo Student()
// usamos la palabra reservada new para crear la instancia u objeto de la clase o prototipo Student().
// El objeto juanita es una instancia del prototipo Student()

/*

Cuando creramos un objeto literal por defecto JS lo convierte en una instancia del Prototipo Object. 

Cuando creramos un array por defecto JS lo convierte en una instancia del Prototipo Array.
 
Esto quiere decir que los objetos literales "Si son instancias" ya que como vemos el objeto literal es una instancia del prototipo Object, pero no son instancias de algun prototipo que nosotros hayamos creado sino del prototipo que JS asigna por defecto Object. Cabe aclarar que los objetos literales se comportan muy diferente a las instancias pero igualmente los objetos literales si son instancias. 

-Los objetos literales son objetos
-Las instancias de prototipos son objetos
-los arrays son tambien objetos ya que cuando creamos un array estamos creando una instancia del prototipo Array y todas las instancias de prototipos son objetos por lo que los arrays tambien son objetos. 
- Prototipo Object() tambien es un objeto (prototipo madre de todos los prototipos y objetos en JS )

*/
