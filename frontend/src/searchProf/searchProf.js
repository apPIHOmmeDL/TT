import {HttpClient, json} from 'aurelia-fetch-client'
import {bindable} from 'aurelia-framework';

export class searchProf{
    @bindable execute;
    @bindable delay;
    timeoutHandle;

    constructor(){
        this.message = "kas meie esileht tootab"
    }

    activate() {
        let client = new HttpClient();

        client.fetch('http://localhost:8080/profs')
            .then(response => response.json())
            .then(profs => this.profList = profs);
    }

    addProf() {
        let client = new HttpClient();

        client.fetch('http://localhost:8080/profs/add', {
            'method': "POST",
            'body': json(this.profData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.firstName)
            });
    }


    executeSearchP() {
            clearTimeout(this.timeoutHandle);
            this.execute({ query: this.query });
    }

        _query = '';
    get query() {
            return this._query;
    }

    set query(newValue) {
            this._query = newValue;
            clearTimeout(this.timeoutHandle);
            this.timeoutHandle = setTimeout(() => this.executeSearchP(), this.delay);

    }

}