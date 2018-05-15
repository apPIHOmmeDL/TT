
import {HttpClient, json} from 'aurelia-fetch-client'
import environment from '../environment'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class prof {

    static inject() { return [Router]; }

     activate() {
        let client = new HttpClient();

        client.fetch(environment.URL + 'profs')
            .then(response => response.json())
            .then(profs => this.profList = profs);
    }

    addProf() {
        let client = new HttpClient();
        client.fetch(environment.URL + 'profs/add', {
            'method': "POST",
            'body': JSON.stringify(this.profData)
        })
            .then(response => response.json());
        location.reload();
    }

    constructor(router){
        this.router = router;
    }

    profView(id){
        this.router.navigate(`viewprof` +'/'+ id);
    }

}