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

   Result() {

        var text = document.getElementById("commentText").value;
     /*  document.getElementById("demo").innerHTML = text;
       var node = document.createElement("P");
       var textnode = document.createTextNode(text);
       node.appendChild(textnode);
       document.getElementById("demo").appendChild(node);*/


      var table = document.getElementById("demo");
       var row = table.insertRow(0);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       cell1.innerHTML = "Like/dislike";
       cell2.innerHTML = text;

       //

    }
}
