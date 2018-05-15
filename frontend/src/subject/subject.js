import {HttpClient, json} from 'aurelia-fetch-client'
import environment from '../environment'

export class subject {

    activate(params, routeConfig){
        let client = new HttpClient();

        client.fetch(environment.URL + 'schools/')
            .then(response => response.json())
            .then(schools => this.schoolList = schools);

        client.fetch(environment.URL + 'subjects/')
            .then(response => response.json())
            .then(subjects => this.subjectList = subjects);
    }

    constructor(router){
        this.router = router;
    }

    addSubject(subjectTitle, schoolId) {
        var selectedSchoolId = null;
        var subjectData = new Object();
        subjectData.title = subjectTitle;
        subjectData.school = new Object();
        subjectData.school.id = schoolId;

        console.log(subjectData);

        let client = new HttpClient();

        client.fetch(environment.URL + 'subjects/add', {
            'method': "POST",
            'body': JSON.stringify(subjectData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });
        location.reload();
    }
}