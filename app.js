const { app, BrowserWindow, Notification } = require("electron");
const path = require("path");
const url = require("url");

function createWindow() {
    // Initialize window and set attributes
    let win = new BrowserWindow();
    win.hasShadow(true);
    win.setMenu(null);
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/", 'main.html'),
        protocol: 'file:',
        slashes: true
    }));
    win.maximize();
    // To use DevTools --> win.webContents.openDevTools();

    win.on('closed', () => {
        win = null
    })

}

app.on("ready", createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})