import {HttpClient, json} from 'aurelia-fetch-client'
import environment from '../environment'

export class sub {

    activate() {
        let client = new HttpClient();

        client.fetch(environment.URL + 'subs')
            .then(response => response.json())
            .then(subjs => this.subjList = subjs);
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