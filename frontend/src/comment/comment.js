import {HttpClient, json} from 'aurelia-fetch-client'
import environment from "../environment";


export class comment{

    activate(params, routeConfig){
        let client = new HttpClient();
        console.log(params);

        client.fetch(environment.URL + 'profs/' + params.id)
            .then(response => response.json())
            .then(singleProf => this.singleProf = singleProf);

        client.fetch(environment.URL + 'profs')
            .then(response => response.json())
            .then(profs => this.profList = profs);
    }

    constructor(){
        this.commentData ='';
        this.commentList =[];
        this.firstName = 'Jaan';
        this.lastName = 'Varik'
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
