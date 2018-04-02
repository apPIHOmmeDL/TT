import { Professor } from './prof/prof';


// import 'bootstrap';

export class App {

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Aurelia projekt';
        config.options.pushState = true;
        config.options.root = '/';
        config.map([
            { route: ['', 'index'],  name: 'home', moduleId: 'home/index',  nav: true, title:'Esileht' },
            { route: 'prof',         name: 'prof', moduleId: 'prof/prof',   nav: true, title:'Õppejõu lisamine'  },
            { route: 'subs',         name: 'subs', moduleId: 'subject/subject',   nav: true, title:'Õppeanete lisamine'  },
            { route: 'viewprof',     name: 'viewprof', moduleId: 'prof/viewprof',   nav: true, title:'Õppejõu vaatamine'  },
        ]);
    }
    constructor(){
        this.heading = 'Lisa ka enda õppejõud';
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
