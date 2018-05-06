import environment from "../environment";
import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class home{

    constructor(router){
        this.router = router;
    }

    activate() {
        let client = new HttpClient();

        client.fetch(environment.URL + 'teachings')
            .then(response => response.json())
            .then(teachings => {this.sortTeachingsByRatings(teachings)});

        client.fetch(environment.URL + 'profs')
            .then(response => response.json())
            .then(profs => {this.sortProfsByRatings(profs)});

        client.fetch(environment.URL + 'subjects')
            .then(response => response.json())
            .then(subjects => {this.sortSubjectsByRatings(subjects)});
    }

    sortProfsByRatings(profs){

        function sortFunction (a, b){
            var bRating = 0;
            var aRating = 0;

            for(let j = 0; j < a.teachings.length; j++){

                for(let i = 0; i < a.teachings[j].teachingRatings.length; i++){
                    var teachingRating =  a.teachings[j].teachingRatings[i];
                    if (teachingRating.rating === 0)
                        aRating = aRating -1;
                    else aRating = aRating + 1;
                }
            }

            for(let j = 0; j < b.teachings.length; j++) {

                for (let i = 0; i < b.teachings[j].teachingRatings.length; i++) {
                    var teachingRating = b.teachings[j].teachingRatings[i];
                    if (teachingRating.rating === 0)
                        bRating = bRating - 1;
                    else bRating = bRating + 1;
                }
            }

            return bRating - aRating;
        }

        profs.sort(sortFunction);
        this.profs = profs;
    }

    sortSubjectsByRatings(subjects){
        console.log(subjects);
        function sortFunction (a, b){
            var bRating = 0;
            var aRating = 0;

            for(let j = 0; j < a.teachings.length; j++){

                for(let i = 0; i < a.teachings[j].teachingRatings.length; i++){

                    var teachingRating =  a.teachings[j].teachingRatings[i];
                    if (teachingRating.rating === 0)
                        aRating = aRating - 1;
                    else aRating = aRating + 1;
                }
            }

            for(let j = 0; j < b.teachings.length; j++) {

                for (let i = 0; i < b.teachings[j].teachingRatings.length; i++) {
                    var teachingRating = b.teachings[j].teachingRatings[i];
                    if (teachingRating.rating === 0)
                        bRating = bRating - 1;
                    else bRating = bRating + 1;
                }
            }
            console.log(aRating, bRating);
            return bRating - aRating;
        }
        subjects.sort(sortFunction);
        this.subjects = subjects;
        console.log(subjects);
    }

    yleshaal(haal){
        if (haal.rating === 1)
            return haal;
    }
    alahaal(haal){
        if (haal.rating === 0)
            return haal;
    }
}