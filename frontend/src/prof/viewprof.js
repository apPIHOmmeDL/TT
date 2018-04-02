
export class viewProf {
   /* constructor(){
    this.fname = 'nana';
    this.lname = 'tadaa';
    }*/

    activate(params, routeConfig){
        this.routeConfig = routeConfig;

        console.log(params);
        var id = params.id;
        console.log(id);
        //var lastname = params['lName'];
        //console.log(lastname);
    }
}