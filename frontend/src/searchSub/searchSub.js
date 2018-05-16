import {HttpClient, json} from 'aurelia-fetch-client'
import {bindable} from 'aurelia-framework';
import environment from "../environment";
import {Router} from 'aurelia-router';

export class searchSub{
    static inject() { return [Router]; }

    constructor(router){
        this.router = router;
        this.subjectList= [];
        this.searchString = '';
    }

    activate() {
        let client = new HttpClient();

        client.fetch(environment.URL + 'subjects')
            .then(response => response.json())
            .then(subjects => this.subjectList = subjects);
    }

    searchSubjects(){
        console.log('Search subject reached');
        let client = new HttpClient();
        let subjects = this.subjectList;
        client.fetch(environment.URL + 'subjects/search/'+ this.searchString)
            .then(response => response.json())
            .then(subjects=> this.subjectList =  subjects);
    }

    subjectView(id){
        this.router.navigate(`viewsubject` +'/'+ id);
    }
}