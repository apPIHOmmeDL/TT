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
            { route: 'subject',         name: 'subject', moduleId: PLATFORM.moduleName('subject/subject'),  nav: true,     title:'Õppeanete lisamine'  },
            { route: 'viewsubject/:id',     name: 'viewsubject', moduleId: PLATFORM.moduleName('subject/viewsubject'),  title:'Õppeaine vaatamine'  },
            { route: 'viewprof/:id',     name: 'viewprof', moduleId: PLATFORM.moduleName('prof/viewprof'),  title:'Õppejõu vaatamine'  },
            { route: 'comment/:pid/:tid/:sid',     name: 'comment', moduleId: PLATFORM.moduleName('comment/comment'),  title:'Kommentaari lisamine'  },
            { route: 'search',         name: 'search', moduleId: PLATFORM.moduleName('search/search'),   nav: true, title:'Otsing'  },
        ]);
    }
}
