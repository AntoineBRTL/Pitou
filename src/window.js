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
}

module.exports = {
    Window: Window
};