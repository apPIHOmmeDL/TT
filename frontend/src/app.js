export class App {
    configureRouter(config, router) {
        this.router = router;
        config.title = 'My Aurelia äpp';
        config.map([
            { route: ['', 'home'],       name: 'home',       moduleId: 'home/index' },
            { route: 'prof', name: 'prof',      moduleId: 'prof/prof', nav: true },
        ]);
    }
}
