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
    }

    sortTeachingsByRatings(te){

        function sortFunction (a, b){
            var bRating = 0;
            var aRating = 0;

            for(let i = 0; i < a.teachingRatings.length; i++){
                var teachingRating =  a.teachingRatings[i];
                if (teachingRating.rating === 0)
                    aRating = aRating -1;
                else aRating = aRating + 1;
            }

            for(let i = 0; i < b.teachingRatings.length; i++){
                var teachingRating =  b.teachingRatings[i];
                if (teachingRating.rating === 0)
                    bRating = bRating - 1;
                else bRating = bRating + 1;
            }

            return bRating - aRating;
        }

        te.sort(sortFunction);
        this.teachings = te;
    }
}