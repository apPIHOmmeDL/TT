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
            "\t\t\"id\":"+ this.id +"\n" +
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