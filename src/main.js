const {app} = require('electron');

const {Vec3} = require('./vec3.js');
const {Window} = require('./window.js');
const {Pitou} = require('./pitou.js');

class Main{

    pitou;
    pitou2;

    constructor(){
        this.pitou = new Pitou(new Vec3(1920/2 - 100, 1080/2 - 100));
    }
}

app.on("ready", function(){
    new Main();
});