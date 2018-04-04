import { Professor } from './prof/prof';
import {PLATFORM} from 'aurelia-pal';

// import 'bootstrap';

export class App {

    configureRouter(config, router) {
        this.router = router;
        config.title = 'Aurelia projekt';
        config.options.pushState = true;
        config.options.root = '/';
        config.map([
            { route: ['', 'index'],  name: 'home', moduleId: PLATFORM.moduleName('home/index'),  nav: true, title:'Esileht' },
            { route: 'prof',         name: 'prof', moduleId: PLATFORM.moduleName('prof/prof'),   nav: true, title:'Õppejõu lisamine'  },
            { route: 'subs',         name: 'subs', moduleId: PLATFORM.moduleName('subject/subject'),   nav: true, title:'Õppeanete lisamine'  },
            { route: 'viewprof/:id',     name: 'viewprof', moduleId: PLATFORM.moduleName('prof/viewprof'),  title:'Õppejõu vaatamine'  },
            { route: 'comment',     name: 'comment', moduleId: PLATFORM.moduleName('comment/comment'),  title:'Kommentaari lisamine'  },
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
