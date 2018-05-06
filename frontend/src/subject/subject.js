import {HttpClient, json} from 'aurelia-fetch-client'
import environment from '../environment'

export class subject {

    activate(params, routeConfig){
        let client = new HttpClient();

        client.fetch(environment.URL + 'profs/' + params.id)
            .then(response => response.json())
            .then(singleProf => this.singleProf = singleProf);

        client.fetch(environment.URL + 'schools/')
            .then(response => response.json())
            .then(schoolsz => this.schoolList = schoolsz);
    }

    constructor(router){
        this.router = router;
    }

    addSubject() {
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
    cmntView(pid, sid){
        this.router.navigate(`comment` +'/'+ pid +'/'+ sid);
    }

}