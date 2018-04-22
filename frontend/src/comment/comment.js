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

    likeComment(id){
        console.log(teachingRatings);
        console.log(id + ' Liked');
    }

    dislikeComment(id){
        console.log(id + ' Disliked');
    }

    likeSubject(id){
        console.log(id + ' Liked');
    }


    dislikeSubject(id){
        console.log(id + ' Disliked');
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