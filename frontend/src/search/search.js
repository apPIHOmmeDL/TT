import {HttpClient, json} from 'aurelia-fetch-client'
import {bindable} from 'aurelia-framework';
import environment from "../environment";

export class searchProf{


    constructor(){
      /*  this.professors= [{name: 'Kalle Kane', subject: 'mata'},
            {name: 'Jaak Hart', subject: 'laulmine'},
            {name: 'Georg Cahill', subject: 'kehaline'}
        ]*/
    }

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
    }




}