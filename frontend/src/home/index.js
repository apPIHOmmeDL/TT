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
                        aRating = aRating +1;
                    else aRating = aRating + 1;
                }
            }

            for(let j = 0; j < b.teachings.length; j++) {

                for (let i = 0; i < b.teachings[j].teachingRatings.length; i++) {
                    var teachingRating = b.teachings[j].teachingRatings[i];
                    if (teachingRating.rating === 0)
                        bRating = bRating + 1;
                    else bRating = bRating + 1;
                }
            }

            return bRating - aRating;
        }

        profs.sort(sortFunction);

        profs.forEach(function(obj) { obj.posRatings = 0 ; });
        profs.forEach(function(obj) { obj.negRatings = 0 ; });
        profs.forEach(function(obj) { obj.percentRatings = 0 ; });
        profs.forEach(function(obj) { obj.countRatings = 0 ; });
        for(let p = 0; p < profs.length; p++){
            for(let i = 0; i< profs[p].teachings.length; i++){
                for(let j = 0; j< profs[p].teachings[i].teachingRatings.length; j++){
                        if (profs[p].teachings[i].teachingRatings[j].rating == 1){
                            profs[p].posRatings = profs[p].posRatings +1;
                            profs[p].countRatings = profs[p].countRatings +1;
                        }
                        else {
                            profs[p].negRatings = profs[p].negRatings +1;
                            profs[p].countRatings = profs[p].countRatings +1;
                        }
                }
            }
        }

        for(let p = 0; p < profs.length; p++){
            if (profs[p].negRatings === 0 && profs[p].posRatings!== 0) profs[p].percentRatings = 100;
            else if (profs[p].negRatings === 0 ) profs[p].percentRatings = 0;
            else  profs[p].percentRatings =  profs[p].posRatings *100 / (profs[p].posRatings + profs[p].negRatings);
            profs[p].percentRatings =  profs[p].percentRatings.toFixed(1);
        }

        this.profs = profs;
    }

    sortSubjectsByRatings(subjects){
        function sortFunction (a, b){
            var aPosRating = 0;
            var aNegRating = 0;
            var bPosRating = 0;
            var bNegRating = 0;

            for(let j = 0; j < a.teachings.length; j++){

                for(let i = 0; i < a.teachings[j].teachingRatings.length; i++){

                    var teachingRating =  a.teachings[j].teachingRatings[i];
                    if (teachingRating.rating === 0)
                        aNegRating = aNegRating + 1;
                    else aPosRating = aPosRating + 1;
                }

            }

            for(let j = 0; j < b.teachings.length; j++) {

                for (let i = 0; i < b.teachings[j].teachingRatings.length; i++) {
                    var teachingRating = b.teachings[j].teachingRatings[i];
                    if (teachingRating.rating === 0)
                        bNegRating = bNegRating + 1;
                    else bPosRating = bPosRating + 1;
                }
            }
            if (bPosRating === 0 && bNegRating === 0) return -1;
            else return (bPosRating / bNegRating) - (aPosRating / aNegRating);
        }
        subjects.sort(sortFunction);


        subjects.forEach(function(obj) { obj.posRatings = 0 ; });
        subjects.forEach(function(obj) { obj.negRatings = 0 ; });
        subjects.forEach(function(obj) { obj.percentRatings = 0 ; });
        subjects.forEach(function(obj) { obj.countRatings = 0 ; });

        for(let s = 0; s < subjects.length; s++){
            for(let i = 0; i < subjects[s].teachings.length; i++){

                for(let j = 0; j < subjects[s].teachings[i].teachingRatings.length; j++){
                    if(subjects[s].teachings[i].teachingRatings[j].rating === 1){
                        subjects[s].posRatings = subjects[s].posRatings +1;
                        subjects[s].countRatings = subjects[s].countRatings +1;
                    }
                    else {
                        subjects[s].negRatings = subjects[s].negRatings +1;
                        subjects[s].countRatings = subjects[s].countRatings +1;
                    }
                }
            }
        }

        for(let s = 0; s < subjects.length; s++){
            if(subjects[s].countRatings === 0) subjects[s].percentRatings = 0;
            else if(subjects[s].negRatings === 0) subjects[s].percentRatings = 100;
            else  subjects[s].percentRatings =  subjects[s].posRatings *100 / (subjects[s].posRatings + subjects[s].negRatings);
            subjects[s].percentRatings =  subjects[s].percentRatings.toFixed(1);
        }

        this.subjects = subjects;
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