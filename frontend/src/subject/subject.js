import {HttpClient, json} from 'aurelia-fetch-client'
import environment from '../environment'

export class sub {

  /*  activate() {
        let client = new HttpClient();

        client.fetch(environment.URL + 'subs')
            .then(response => response.json())
            .then(subjs => this.subjList = subjs);
    } */

    activate(params, routeConfig){
        let client = new HttpClient();

        client.fetch(environment.URL + 'profs/' + params.id)
            .then(response => response.json())
            .then(singleProf => this.singleProf = singleProf);
    }

    addSubj() {
        let client = new HttpClient();

        client.fetch(environment.URL + 'subj/add', {
            'method': "POST",
            'body': json(this.subjData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.subjName)
            });
        location.reload();
    }

}