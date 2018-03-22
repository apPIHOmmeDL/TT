import {HttpClient, json} from 'aurelia-fetch-client'

export class Professor {
    //profsData = {};
    //profsList = [];


    constructor(firstname, lastname, subject) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.subject = subject;
    }
    /*
        activate() {
            let client = new HttpClient();

            client.fetch('http://localhost:8080/profs')
                .then(response => response.json())
                .then(profs => this.profsList = profs);
        }

        addProfs(){

            let client = new HttpClient();

          //  this.profsData = {
            //    "firstname":"Mari",
                //     "lastname":"Roo",
                //     "subject":"Mata",
                // };

                client.fetch('http://localhost:8080/profs/add', {
                'method':"POST",
                'body': json(this.profsData),
            })
                .then(response => response.json())
                .then(data => {
                    console.log("Server saatis" + data.firstname + data.lastname+ data.subject);
        });
            console.log("Method executed!")
        }
        */
}