function videoPlay(id) {
  const urlSecreta = "https://platziultrasecreto.com/" + id;
  console.log("Se esta reproduciendo desde la url: " + urlSecreta);
}
function videoStop(id) {
  const urlSecreta = "https://platziultrasecreto.com/" + id;
  console.log("Pausamos la url: " + urlSecreta);
}

export class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoStop(this.videoID);
  }
}

// const tomas1 = {
//   name: "Tomas Felipe",
//   username: "tompirojas",
//   points: 100,
//   socialmedia: {
//     twiter: "tomasferojas",
//     instagram: "tomasferojas",
//     facebook: "undefined",
//   },
//   approvedCourses: ["Curso definitivo html y css", "Curso practico html y css"],
//   learnignPaths: [
//     {
//       name: "Escuela de desarrolo Web",
//       courses: [
//         "Curso definitivo html y css",
//         "Curso practico html y css",
//         "Curso responsive design",
//       ],
//     },
//     {
//       name: "Escuela de Videojuegos",
//       courses: [
//         "Curso introduccion a produccion videojuegos",
//         "Curso Unreal Engine",
//         "Curso de Unity 3D",
//       ],
//     },
//   ],
// };

// const felipe1 = {
//   name: "Felipe",
//   username: "feliperojas",
//   points: 1000,
//   socialmedia: {
//     twiter: "piperojas",
//     instagram: "pipe_rojas",
//     facebook: "undefined",
//   },
//   approvedCourses: ["Curso DataBusiness", "Curso DataViz"],
//   learnignPaths: [
//     {
//       name: "Escuela de desarrolo Web",
//       courses: [
//         "Curso definitivo html y css",
//         "Curso practico html y css",
//         "Curso responsive design",
//       ],
//     },
//     {
//       name: "Escuela de Data Science",
//       courses: ["Curso DataBusiness", "Curso DataViz", "Curso de Tableau"],
//     },
//   ],
// };

class Course {
  constructor({ name, clases = [] }) {
    // this.name = name;
    this._name = name; // este _ es para esconder el atributo name en nuestros prototipo Course para que no sea alterado ni cambiado por alguien mas.
    this.clases = clases;
  }
  // Aca creamos el atributo name como si fuera un "metodo" en el proceso de encapsular.
  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (nuevoNombrecito === "Curso Malito de Programacion Basica") {
      console.error("No puedes actualizar el nombre de este curso!");
    } else {
      this._name = nuevoNombrecito;
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso gratis de programacion basica",
});

// cursoProgBasica.name;
//Outup: Curso gratis de programacion basica

const cursoDefinitivoHTML = new Course({
  name: "Curso definitivo html y css",
});
const cursoPracticoHTML = new Course({
  name: "Curso practico html y css",
});
const cursoDataBusiness = new Course({
  name: "Curso Profesional de DataBusiness",
});
const cursoDataViz = new Course({
  name: "Curso de Visualizacion de Data",
});
const cursoIntoduccionVdg = new Course({
  name: "Curso introduccion a produccion videojuegos",
});
const cursoUnrealEngine = new Course({
  name: "Curso Profesional de Unreal Engine",
});

class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo web",
  courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});
const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [cursoProgBasica, cursoDataBusiness, cursoDataViz],
});
const escuelaVideoJuegos = new LearningPath({
  name: "Escuela de Video Juegos",
  courses: [cursoProgBasica, cursoIntoduccionVdg, cursoUnrealEngine],
});

class Student {
  constructor({
    name,
    email,
    username,
    twiter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twiter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}
const tomas2 = new Student({
  name: "Tomas Felipe",
  username: "tompirojas",
  email: "tomas@gmail.com",
  twiter: "tomasferojas",
  learningPaths: [escuelaWeb, escuelaData],
});
const felipe2 = new Student({
  name: "Felipe",
  username: "piperojas",
  email: "felipe@gmail.com",
  instagram: "pipe_rojas",
  learningPaths: [escuelaWeb, escuelaVideoJuegos],
});
