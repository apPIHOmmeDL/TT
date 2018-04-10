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

        client.fetch(environment.URL + 'schools/')
            .then(response => response.json())
            .then(schoolsz => this.schoolList = schoolsz);
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

    addTeaching(profId, subject){
        let teachingJSON = "{\n" +
            "\t\"professor\": {\n" +
            "\t\"id\": "+ profId +"\n" +
            "\t},\n" +
            "\t\"subject\": {\n" +
            "\t\t\"title\": \""+ subject.name +"\",\n" +
            "\t\t\"school\": {\n" +
            "\t\t\t\"id\": 1\n" +
            "\t\t}\n" +
            "\t}\n" +
            "}"
        //console.log(teachingJSON);
        let client = new HttpClient();
        client.fetch(environment.URL + 'teachings/add', {
            'method': "POST",
            'body': teachingJSON
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });
        location.reload();
    }

    likeSubject(id){
        console.log(id);
    }


    dislikeSubject(id){
        console.log(id);
    }
}