import {HttpClient, json} from 'aurelia-fetch-client'
import environment from '../environment'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class subject {

    static inject() { return [Router]; }

    activate(params, routeConfig){
        let client = new HttpClient();

        client.fetch(environment.URL + 'schools/')
            .then(response => response.json())
            .then(schools => this.schoolList = schools);

        client.fetch(environment.URL + 'subjects/')
            .then(response => response.json())
            .then(subjects => this.subjectList = subjects);
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

    constructor(router){
        this.router = router;
    }

    subjectView(id){
        this.router.navigate(`viewsubject` +'/'+ id);
    }
}