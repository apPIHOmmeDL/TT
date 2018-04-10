import {HttpClient, json} from 'aurelia-fetch-client'
import environment from "../environment";

export class comment{

    activate(params, routeConfig){
        let client = new HttpClient();
        this.ssid = params.sid;
        console.log(this.ssid);
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

    likeComment(index){

    }

    dislikeComment(index){

    }
}