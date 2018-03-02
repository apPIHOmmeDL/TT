define('app',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    class App {
        configureRouter(config, router) {
            this.router = router;
            config.title = 'My Aurelia äpp';
            config.map([{ route: ['', 'home'], name: 'home', moduleId: 'home/index' }, { route: 'prof', name: 'prof', moduleId: 'prof/prof', nav: true }]);
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
define('prof/prof',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    class people {
        constructor() {
            this.message = "Õppejõud";
        }
    }
    exports.people = people;
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <router-view></router-view>\r\n</template>\r\n"; });
define('text!home/index.html', ['module'], function(module) { module.exports = "<template>\r\n    <h1>Tere-tere! </h1>\r\n    <h2> ${message}</h2>\r\n</template>"; });
define('text!prof/prof.html', ['module'], function(module) { module.exports = "<template>\r\n    <h1>Siia tulevad ${message} </h1>\r\n<p>Lisa õppejõud</p>\r\n    <form id=\"userform\" submit.delegate=\"addUser()\">\r\n        <div><label for=\"firstName\">Eesnimi</label><input id=\"firstName\" type=\"text\" name=\"firstName\" value.bind=\"userData.firstName\"></div>\r\n        <div><label for=\"lastName\">Perenimi</label><input id=\"lastName\" type=\"text\" name=\"lastName\" value.bind=\"userData.lastName\"></div>\r\n        <div><label for=\"courseName\">Õppeaine</label><input id=\"courseName\" type=\"text\" name=\"courseName\" value.bind=\"userData.courseNames\"></div>\r\n        <input type=\"submit\" name=\"Lisa õppejõud\">\r\n    </form>\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map