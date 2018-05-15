import {HttpClient, json} from 'aurelia-fetch-client'
import environment from '../environment'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class subjects {

    static inject() { return [Router]; }

    activate(params, routeConfig){
        let client = new HttpClient();

        client.fetch(environment.URL + 'schools/')
            .then(response => response.json())
            .then(schools => this.schoolList = schools);

        client.fetch(environment.URL + 'subjects/')
            .then(response => response.json())
            .then(subjects => this.subjectList = subjects);
    }

    constructor(router){
        this.router = router;
    }

    subjectView(id){
        this.router.navigate(`viewsubject` +'/'+ id);
    }
}