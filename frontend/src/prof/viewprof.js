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

    cmntView(pid, tid, sid){
        //window.alert(firstname + " " + lastname + " " + id);
        this.router.navigate(`comment` +'/'+ pid +'/'+ tid +'/'+ sid);
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

    rateSubject(id, rating){
        console.log(id );

        let ratingJSON = "{\n" +
            "\t\"rating\": \"" + rating +"\",\n" +
            "\t\"teaching\":{\n" +
            "\t\t\"id\":"+ id +"\n" +
            "\t}\n" +
            "}";

        let client = new HttpClient();
        client.fetch(environment.URL + 'teachingRatings/add', {
            'method': "POST",
            'body': ratingJSON
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });
        location.reload();

    }

    yleshaal(haal){
        if (haal.rating === 1)
            return haal;
    }
    alahaal(haal){
        if (haal.rating === 0)
            return haal;
    }
}