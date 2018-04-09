import {HttpClient, json} from 'aurelia-fetch-client'
import environment from "../environment";


export class comment{

    activate(params, routeConfig){
        let client = new HttpClient();
        console.log(params);
        console.log(params.pid);
        console.log(params.sid);
       // console.log(pid.teachings[sid].subject.title);
        client.fetch(environment.URL + 'profs/' + params.pid)
            .then(response => response.json())
            .then(singleProf => this.singleProf = singleProf);

        client.fetch(environment.URL + 'subjects/' + params.sid)
            .then(response => response.json())
            .then(singleSubj => this.singleSubj = singleSubj);

    }

    constructor(router){
        this.router = router;
    }

    get profFullName(){
        return '${this.firstName} ${this.lastName}';//return '${this.firstName} ${this.lastName}';
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
