import { Professor } from './prof/prof';


export class App {
    configureRouter(config, router) {
        this.router = router;
        config.title = 'Meie Aurelia';
        config.map([
            { route: ['', 'home'],       name: 'home',       moduleId: 'home/index' },
            { route: 'prof', name: 'prof',      moduleId: 'prof/prof', nav: true },
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
