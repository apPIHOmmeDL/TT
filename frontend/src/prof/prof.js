import {HttpClient, json} from 'aurelia-fetch-client'


export class Professor {


    constructor(firstname, lastname, subject) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.subject = subject;
    }
    attached(){
        console.log ("ATTACHED")
    }
    addUser(){

        let client = new HttpClient();

        this.userData = {
            "firstName":"Mari",
            "lastName":"Roo",
            "subject":"Mata",
        };

            client.fetch('http://localhost:8080/profs/add', {
            'method':"POST",
            'body': json(this.userData),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis " + data.firstName + data.lastName+ data.subject);
    });
        console.log("Method executed!")
    }
}