import { Professor } from './prof/prof';

// import 'bootstrap';

export class App {
    configureRouter(config, router) {
        this.router = router;
        config.title = 'Aurelia projekt';
        config.options.pushState = true;
        config.options.root = '/';
        config.map([
            { route: ['', 'index'],  name: 'home', moduleId: 'home/index',                    nav: true, title:'Esileht' },
            { route: 'prof',         name: 'prof', moduleId: 'prof/prof',                     nav: true, title:'Professori lisamine'  },
            { route: 'searchProf',   name: 'searchProf', moduleId: 'searchProf/searchProf',   nav: true, title:'Professori otsimine'  },
            { route: 'comment',      name: 'comment', moduleId: 'comment/comment',            nav: true, title:'kommentaar'  }
        ]);
    }

    constructor(){

        this.professors = [];
        this.professorFirstname = '';
        this.professorLastname = '';
        this.professorSubject = '';
    }

    addProfessor(){
        if(this.professorFirstname && this.professorLastname && this.professorSubject) {
            this.professors.push(new Professor(this.professorFirstname, this.professorLastname, this.professorSubject));

            // Clear Fields
            this.professorFirstname = '';
            this.professorLastname = '';
            this.professorSubject = '';
        }
    }
}
