const { Vec3 } = require('./vec3.js');
const { Window } = require('./window.js');
const { dialog, screen } = require('electron');

function getRandom(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * All the messages that Pitou can say.
 */
const messages = [
    {message: "Miaouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", options: ["Shut up Pitou !"]},
    {message: "Is the food-room's door open ?", options: ["Yes", "Go check it !"]},
    {message: "Show me if the door is open", options: ["Ahhh, please stop pitou"]},
    {message: "Give me some food", options: ["Take this bro ;D !"]},
    {message: "Can you open the door ?", options: ["Na"]},
    {message: "Clony and Lila are shitting on me, I'm so sad ...", options: ["Bahaha fuck you Pitou"]},
    {message: "Do you want to know a little secret ??", options: ["Yes !"]},
    {message: "Stop working, GIVE ME SOME FOOD", options: ["No"]},
    {message: "Fun fact, you can't see me in the dark", options: ["Nice !"]},
    {message: "I have a little gift for you :D, here is a dead bird", options: ["No no no please Pitou ..."]},
    {message: "Why are you so sad bro, relax I just want some food !", options: ["Ahhh ok, I wish you would have told me that sooner"]},
    {message: "Yes Pierre you're back home ! WTFFF it's been to long since I didn't see you bro", options: ["Who is Pierre ?"]},
];

class Pitou{

    /**
     * @type {Vec3}
     */
    #position;

    /**
     * @type {Window}
     */
    #window;

    /**
     * @type {Vec3}
     */
    #direction = new Vec3(0.0, 0.0);

    /** 
     * @type {Number}
     */
    #speed = 1.0;

    /**
     * @type {Vec3}
     */
    #gotoPosition = new Vec3(0.0, 0.0);

    constructor(position){  

        this.#position = position;
        this.#window = new Window();

        // screen size
        const {width, height} = screen.getPrimaryDisplay().workAreaSize;

        // positionate window
        this.#window.setPosition(position.x, position.y);

        // start AI of Pitou
        let x = getRandom(0, width + 1);
        let y = getRandom(0, height + 1);
        this.#goTo(new Vec3(x, y), 1.0);

        setInterval(function()
        {
            this.#move(width, height);
        }.bind(this), 1000/300);

        setInterval(function()
        {
            let x = getRandom(0, width + 1);
            let y = getRandom(0, height + 1);
            this.#goTo(new Vec3(x, y), getRandom(1, 4));
        }.bind(this), getRandom(1000, 5000));

        setInterval(function()
        {
            let tmp = messages[getRandom(0, messages.length)];
            this.#say(tmp.message, tmp.options);
        }.bind(this), getRandom(5000, 10000));

        // display Pitou sprite into the window
        this.#window.display("https://www.nicepng.com/png/full/586-5863858_inky-black-kitten-minky-print-black-cat.png", 80, 80);
    }
    
    #checkForCollision(width, height)
    {
        let origin = this.#window.getPosition();
        let size = this.#window.getSize();

        if(origin[0] <= 0)
            return new Vec3(1, 0);

        if(origin[0] + size[0] >= width)
            return new Vec3(-1, 0);

        if(origin[1] <= 0)
            return new Vec3(0, 1);

        if(origin[1] + size[1] >= height)
            return new Vec3(0, -1);

        return undefined;
    }

    /**
     * 
     * @param {Vec3} position 
     * @param {Number} speed 
     */
    #goTo(position, speed = 1)
    {
        let direction = position.add(this.#position.scale(-1));
        this.#direction = direction.normalize();
        this.#speed = speed;
        this.#gotoPosition = position;
    }

    /**
     * 
     * @param {Number} width 
     * @param {Number} height 
     */
    #move(width, height)
    {
        let normal = this.#checkForCollision(width, height);
        if(normal)
            this.#direction = this.#direction.reflect(normal);

        this.#position = this.#position.add(this.#direction.scale(this.#speed));
        this.#position.x = Math.abs(Math.round(this.#position.x));
        this.#position.y = Math.abs(Math.round(this.#position.y));
        this.#window.setPosition(this.#position.x, this.#position.y);
    }

    /**
     * 
     * @param {String} message 
     * @param {Array} possibleResponses 
     */
    #say(message, possibleResponses)
    {
        dialog.showMessageBox(this.#window, {message: message, buttons: possibleResponses, title: "Pitou want to say something", type: "none"});
    }
}

module.exports = {
    Pitou: Pitou
};