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
            .then(schools => this.schoolList = schools);

        client.fetch(environment.URL + 'subjects/')
            .then(response => response.json())
            .then(subjects => this.subjectList = subjects);
    }

    constructor(router){
        this.router = router;
    }

    cmntView(id){
        this.router.navigate(`comment` +'/'+ id);
    }

    subjAdd(id){
        this.router.navigate(`subs` +'/'+ id);
    }

    addTeaching(profId, subjectId){
        let teachingData = new Object();
        teachingData.professor = Object();
        teachingData.professor.id = profId;
        teachingData.subject = Object();
        teachingData.subject.id = subjectId;

        let client = new HttpClient();
        client.fetch(environment.URL + 'teachings/add', {
            'method': "POST",
            'body': JSON.stringify(teachingData)
        })
            .then(response => response.json());
        location.reload();
    }

    rateSubject(ratingMark, teachingId){
        let ratingData = new Object();
        ratingData.rating = ratingMark;
        ratingData.teaching = Object();
        ratingData.teaching.id = teachingId;
        let client = new HttpClient();

        console.log(ratingData);
        client.fetch(environment.URL + 'teachingRatings/add', {
            'method': "POST",
            'body': JSON.stringify(ratingData)
        })
            .then(response => response.json());
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