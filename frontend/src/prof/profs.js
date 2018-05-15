import {HttpClient, json} from 'aurelia-fetch-client'
import environment from '../environment'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

//@inject(Router)
export class profs {

    static inject() { return [Router]; }

    activate() {
        let client = new HttpClient();

        client.fetch(environment.URL + 'profs')
            .then(response => response.json())
            .then(profs => this.profList = profs);
    }

    constructor(router){
        this.router = router;
    }

    profView(id){
        this.router.navigate(`viewprof` +'/'+ id);
    }

}