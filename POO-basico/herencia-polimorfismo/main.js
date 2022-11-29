class Comment {
  constructor({ content, studentName, studentRole = "estudiante" }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(`${this.studentName} 
    (${this.studentRole})`);
    console.log(`${this.likes} likes`);
    console.log(`${this.content}`);
  }
}

function videoPlay(id) {
  const urlSecreta = "https://platziultrasecreto.com/" + id;
  console.log("Se esta reproduciendo desde la url: " + urlSecreta);
}
function videoStop(id) {
  const urlSecreta = "https://platziultrasecreto.com/" + id;
  console.log("Pausamos la url: " + urlSecreta);
}

class PlatziClass {
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
  constructor({ name, clases = [], isFree = false, lang = "spanish" }) {
    // this.name = name;
    this._name = name; // este _ es para esconder el atributo name en nuestros prototipo Course para que no sea alterado ni cambiado por alguien mas.
    this.clases = clases;
    this.isFree = isFree;
    this.lang = lang;
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
  isFree: true,
});

// cursoProgBasica.name;
//Outup: Curso gratis de programacion basica

const cursoDefinitivoHTML = new Course({
  name: "Curso definitivo html y css",
});
const cursoPracticoHTML = new Course({
  name: "Curso practico html y css",
  lang: "english",
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
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos, ${this.name}, solo puedes tomar cursos abiertos `
      );
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos, ${this.name}, no puedes tomar cursos en ingles `
      );
    }
  }
}

class Expert extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "Profesor",
    });
    comment.publicar();
  }
}

const tomas2 = new FreeStudent({
  name: "Tomas Felipe",
  username: "tompirojas",
  email: "tomas@gmail.com",
  twiter: "tomasferojas",
  learningPaths: [escuelaWeb, escuelaData],
});
const felipe2 = new BasicStudent({
  name: "Felipe",
  username: "piperojas",
  email: "felipe@gmail.com",
  instagram: "pipe_rojas",
  learningPaths: [escuelaWeb, escuelaVideoJuegos],
});

const mayola = new TeacherStudent({
  name: "Maria Trujillo",
  username: "mayolatru",
  email: "mayolatru@gmail.com",
  instagram: "mayola_tru",
});
