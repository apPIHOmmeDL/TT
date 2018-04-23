import {HttpClient, json} from 'aurelia-fetch-client'
import environment from "../environment";

export class comment{

    activate(params, routeConfig){
        let client = new HttpClient();
        this.ssid = params.sid;
        this.tid = params.tid;
        //console.log(this.ssid);
        client.fetch(environment.URL + 'profs/' + params.pid)
            .then(response => response.json())
            .then(singleProf => this.singleProf = singleProf);

        client.fetch(environment.URL + 'teachings/' + params.tid)
            .then(response => response.json())
            .then(teachin => this.teachins = teachin);

    }

    constructor(router){
        this.router = router;
    }

    createComment(){
        this.commentList.push(this.commentData);
        this.commentData ='';
    }

    deleteComment(index){
        this.commentList.splice(index, 1);
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
        console.log(id + ' Liked');

        let ratingJSON = "{\n" +
            "\t\"rating\": \"" + rating +"\",\n" +
            "\t\"comment\":{\n" +
            "\t\t\"id\":"+ id +"\n" +
            "\t}\n" +
            "}";

        let client = new HttpClient();
        client.fetch(environment.URL + 'commentRatings/add', {
            'method': "POST",
            'body': ratingJSON
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });
        location.reload();
    }

    rateSubject(id, rating){
        console.log(id + ' Liked');

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

    addComment(comment)
    {
        let commentJSON = "{\n" +
            "\t\"comment\": \"" + comment.name +"\",\n" +
            "\t\"teaching\":{\n" +
            "\t\t\"id\":"+ this.tid +"\n" +
            "\t}\n" +
            "}";
        //console.log(commentJSON);
        let client = new HttpClient();
        client.fetch(environment.URL + 'comments/add', {
            'method': "POST",
            'body': commentJSON
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });
        location.reload();
    }

}