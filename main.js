const {app, BrowserWindow, Notification} = require("electron");

function createWindow() {
    // Initialize window and set attributes
    let win = new BrowserWindow({height:1920, width:1080});
    win.hasShadow(true);
    win.setMenu(null);
    win.loadFile("main.html");

}

app.on("ready", createWindow);