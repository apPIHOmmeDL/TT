import {HttpClient, json} from 'aurelia-fetch-client'
import environment from "../environment";

export class comment{

    activate(params, routeConfig){
        let client = new HttpClient();
        this.id = params.id;

        client.fetch(environment.URL + 'teachings/' + params.id)
            .then(response => response.json())
            .then(singleTeaching => this.singleTeaching = singleTeaching);
    }

    constructor(router){
        this.router = router;
    }

    yleshaal(haal){
        if (haal.rating === 1)
            return haal;
    }
    alahaal(haal){
        if (haal.rating === 0)
            return haal;
    }

    rateComment(id, rating){
        let ratingData = new Object();
        ratingData.rating = rating;
        ratingData.comment = Object();
        ratingData.comment.id = id;

        let client = new HttpClient();
        client.fetch(environment.URL + 'commentRatings/add', {
            'method': "POST",
            'body': JSON.stringify(ratingData)
        })
            .then(response => response.json());
        location.reload();
    }

    rateSubject(id, rating){
        let ratingData = new Object();
        ratingData.rating = rating;
        ratingData.teaching = Object();
        ratingData.teaching.id = id;

        let client = new HttpClient();
        client.fetch(environment.URL + 'teachingRatings/add', {
            'method': "POST",
            'body': JSON.stringify(ratingData)
        })
            .then(response => response.json());
        location.reload();
    }

    addComment(comment) {
        let commentData = new Object();
        commentData.comment = comment.name;
        commentData.teaching = Object();
        commentData.teaching.id = this.id;

        let client = new HttpClient();
        client.fetch(environment.URL + 'comments/add', {
            'method': "POST",
            'body': JSON.stringify(commentData)
        })
            .then(response => response.json());
        location.reload();
    }
}