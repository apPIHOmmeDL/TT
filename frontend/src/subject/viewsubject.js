import {HttpClient, json} from 'aurelia-fetch-client'
import environment from "../environment";
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class viewProf {
    static inject() { return [Router]; }

    activate(params, routeConfig){
        let client = new HttpClient();

        client.fetch(environment.URL + 'subjects/' + params.id)
            .then(response => response.json())
            .then(singleSubject => this.singleSubject = singleSubject);
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

    rateSubject(ratingMark, teachingId){
        var ratingData = new Object();
        ratingData.rating = ratingMark;
        ratingData.teaching = Object();
        ratingData.teaching.id = teachingId;
        let client = new HttpClient();
        console.log(ratingData);
        client.fetch(environment.URL + 'teachingRatings/add', {
            'method': "POST",
            'body': JSON.stringify(ratingData)
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