import {HttpClient, json} from 'aurelia-fetch-client'

export class searchProf{
    constructor(){
        this.message = "kas meie esileht tootab"
    }

    activate() {
        let client = new HttpClient();

        client.fetch('http://localhost:8080/profs')
            .then(response => response.json())
            .then(profs => this.profList = profs);
    }

    addProf() {
        let client = new HttpClient();

        client.fetch('http://localhost:8080/profs/add', {
            'method': "POST",
            'body': json(this.profData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.firstName)
            });
    }


}