import {HttpClient, json} from 'aurelia-fetch-client'
import environment from "../environment";
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class viewProf {

    static inject() { return [Router]; }

    activate(params, routeConfig){
        let client = new HttpClient();

        client.fetch(environment.URL + 'profs/' + params.id)
            .then(response => response.json())
            .then(singleProf => this.singleProf = singleProf);
    }

    constructor(router){
        this.router = router;
    }

    cmntView(pid, sid){
        //window.alert(firstname + " " + lastname + " " + id);
        this.router.navigate(`comment` +'/'+ pid +'/'+ sid);
    }

    subjAdd(id){
        this.router.navigate(`subs` +'/'+ id);
    }
}