import {HttpClient, json} from 'aurelia-fetch-client'
import environment from "../environment";

export class viewProf {
    activate(params, routeConfig){
        let client = new HttpClient();

        client.fetch(environment.URL + 'profs/' + params.id)
            .then(response => response.json())
            .then(singleProf => this.singleProf = singleProf);
    }
}