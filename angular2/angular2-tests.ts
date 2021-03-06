/// <reference path="angular2.d.ts"/>

// Use Typescript 1.4 style imports
import ng = require("angular2/angular2");

class Service {
	
}
class Service2 {
  
}

class Cmp {
	static annotations: any[];
}
Cmp.annotations = [
  ng.Component({
    selector: 'cmp',
    injectables: [Service, ng.bind(Service2).toValue(null)]
  }),
  ng.View({
    template: '{{greeting}} world!',
    directives: [ng.NgFor, ng.NgIf]
  })
];

ng.bootstrap(Cmp);
