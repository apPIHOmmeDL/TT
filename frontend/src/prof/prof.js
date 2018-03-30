import {HttpClient, json} from 'aurelia-fetch-client'
import environment from '../environment'

export class prof {

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
            'body': json(this.profData)
        })
            .then(response => response.json())
            .then(data => {
               console.log(data.firstName)
            });
        location.reload();
    }
}