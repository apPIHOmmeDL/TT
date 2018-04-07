import {HttpClient, json} from 'aurelia-fetch-client'
import environment from "../environment";

export class comment{
    constructor(){
        this.fname = 'trrrrrr';
        this.lname = 'lalala';
    }

    activate() {
        let client = new HttpClient();

        client.fetch(environment.URL + 'comment')
            .then(response => response.json())
            .then(comments => this.commentList = comments);
    }

    addComment(){
        let client = new HttpClient();

        client.fetch(environment.URL + 'comment/add', {
            'method': "POST",
            'body': JSON.stringify(this.commentData)

        })
            .then(response => response.json())
            .then(data => {
                console.log(data.commentName)
            });
        location.reload();
    }

}
