define('app',['exports', './prof/prof'], function (exports, _prof) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.App = undefined;
    class App {
        configureRouter(config, router) {
            this.router = router;
            config.title = 'Meie Aurelia';
            config.map([{ route: ['', 'home'], name: 'home', moduleId: 'home/index' }, { route: 'prof', name: 'prof', moduleId: 'prof/prof', nav: true }]);
        }
        constructor() {
            this.heading = 'Lisa ka enda õppejõud';
            this.professors = [];
            this.professorFirstname = '';
            this.professorLastname = '';
            this.professorSubject = '';
        }

        addProfessor() {
            if (this.professorFirstname && this.professorLastname && this.professorSubject) {
                this.professors.push(new _prof.Professor(this.professorFirstname, this.professorLastname, this.professorSubject));

                // Clear Fields
                this.professorFirstname = '';
                this.professorLastname = '';
                this.professorSubject = '';
            }
        }
    }
    exports.App = App;
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(() => aurelia.setRoot());
  }
});
define('home/index',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    class Home {
        constructor() {
            this.message = "Lihtsalt proovin,et kas meie esileht töötab";
        }
    }
    exports.Home = Home;
});
define('prof/prof',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    class Professor {
        constructor(firstname, lastname, subject) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.subject = subject;
        }
    }
    exports.Professor = Professor;
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    //config.globalResources([]);
  }
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n</template>\n"; });
define('text!home/index.html', ['module'], function(module) { module.exports = "<template>\n    <h1>Tere-tere! </h1>\n    <h2> ${message}</h2>\n</template>"; });
define('text!prof/prof.html', ['module'], function(module) { module.exports = "<template>\n    <div class=\"container\">\n        <h1>${heading}</h1>\n\n        <form submit.trigger=\"addProfessor()\">\n            <input type=\"text\" value.bind=\"professorFirstname\" placeholder=\"Eesnimi\" class=\"u-full-width\">\n            <input type=\"text\" value.bind=\"professorLastname\" placeholder=\"Perenimi\" class=\"u-full-width\">\n            <input type=\"text\" value.bind=\"professorSubject\" placeholder=\"Õppeaine\" class=\"u-full-width\">\n            <button type=\"submit\" class=\"u-full-width\">Lisa Õppejõud</button>\n        </form>\n\n        <table class=\"u-full-width\">\n            <tr>\n                <th>Eesnimi</th>\n                <th>Perenimi</th>\n                <th>Õppeaine</th>\n                <th></th>\n            </tr>\n            <tr repeat.for=\"professor of professors\">\n                <td>${professor.firstname}</td>\n                <td>${professor.lastname}</td>\n                <td>${professor.subject}</td>\n                <td><button>vaata kommentaare</button></td>\n            </tr>\n        </table>\n    </div>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map