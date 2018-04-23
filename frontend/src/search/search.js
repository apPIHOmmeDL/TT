import {HttpClient, json} from 'aurelia-fetch-client'
import {bindable} from 'aurelia-framework';
import environment from "../environment";

export class search{



    constructor(router){
        this.router = router;
        this.professors = [];
        this.searchString = '';
    }

    activate() {
        let client = new HttpClient();

        client.fetch(environment.URL + 'profs')
            .then(response => response.json())
            .then(profs => this.professors = profs);
    }

    searchProfessors(){
        console.log('Search prof reached');
        let client = new HttpClient();
        debugger;
        let professors = this.professors;
        client.fetch(environment.URL + 'profs/search/'+ this.searchString)
            .then(response => response.json())
            .then(profs => this.professors =  profs);
    }

}