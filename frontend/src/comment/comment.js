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

    likeComment(id){
        console.log(id);
    }

    dislikeComment(id){
        console.log(id);
    }

    likeSubject(id){
        console.log(id);
    }


    dislikeSubject(id){
        console.log(id);
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