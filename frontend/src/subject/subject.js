import {HttpClient, json} from 'aurelia-fetch-client'
import environment from '../environment'

export class subject {

   activate() {
        let client = new HttpClient();

        client.fetch(environment.URL + 'subjects')
            .then(response => response.json())
            .then(subjs => this.subjList = subjs);
    }

    activate(params, routeConfig){
        let client = new HttpClient();

        client.fetch(environment.URL + 'profs/' + params.id)
            .then(response => response.json())
            .then(singleProf => this.singleProf = singleProf);
    }

    addSubj() {
        let client = new HttpClient();

        client.fetch(environment.URL + 'subjects/add', {
            'method': "POST",
            'body': JSON.stringify(this.subjData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.subjName)
            });
        location.reload();
    }

}