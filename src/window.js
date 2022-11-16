const {BrowserWindow} = require('electron');

class Window extends BrowserWindow {
    constructor(){
        super({
            width: 100,
            height: 100,
            skipTaskbar: true,
            alwaysOnTop: true,
            closable: false,
            frame: false,
            hasShadow: false,
            transparent: true
        });

        this.setIgnoreMouseEvents(true);
        //this.webContents.openDevTools({mode:'detach'})
        let html = "<body></body>"
        this.loadURL("data:text/html;charset=utf-8," + encodeURI(html));
    }

    /**
     * Display a sprite into the window.
     * 
     * @param {String} pathToSprite 
     */
    display(pathToSprite, width, height)
    {
        this.webContents.executeJavaScript(`
            
            const image = document.createElement("img");
            image.src = "${pathToSprite}";
            image.style.width = "${width}px";
            image.style.height = "${height}px";

            document.body.appendChild(image);
        
        `, true);
    }
}

module.exports = {
    Window: Window
};