import {HttpClient, json} from 'aurelia-fetch-client'
import {bindable} from 'aurelia-framework';
import environment from "../environment";

export class search{



    constructor(router){
        this.router = router;
    }

    activate() {
        let client = new HttpClient();

        client.fetch(environment.URL + 'profs')
            .then(response => response.json())
            .then(profs => this.profList = profs);
    }

    searchProf(){
        console.log('Search prof reached');
        debugger;
        let client = new HttpClient();

        client.fetch(environment.URL + 'profs/search/'+ this.searchStr )
            .then(response => response.json())
            .then(function(profs) {
                debugger;
                this.profList = profs
            });
    }

}