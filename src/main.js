const {app} = require('electron');

const {Vec3} = require('./vec3.js');
const {Window} = require('./window.js');
const {Pitou} = require('./pitou.js');

class Main{

    window;
    pitou;

    constructor(){
        this.window = new Window();
        this.pitou = new Pitou(new Vec3(1920/2 - 100, 1080/2 - 100), this.window);

        this.window.webContents.on("did-finish-load", function(){
            this.pitou.display();
        }.bind(this));
    }
}

app.on("ready", function(){
    new Main();
});