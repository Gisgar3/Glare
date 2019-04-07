const { app, BrowserWindow, Notification } = require("electron");
const path = require("path");
const url = require("url");

function createWindow() {
    // Initialize window and set attributes
    let win = new BrowserWindow({show:false});
    win.webContents.openDevTools();
    win.hasShadow(true);
    win.setMenu(null);
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/", 'main.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', () => {
        win = null
    })

    win.on("ready-to-show", () => {
        win.maximize();
    });
    
    // Setup Window
    let setupWin = new BrowserWindow({show:false});
    setupWin.setSize(800, 600);
    setupWin.loadURL(url.format({
        pathname: path.join(__dirname, "/", 'setup.html'),
        protocol: 'file:',
        slashes: true
    }));
    setupWin.webContents.openDevTools();
    setupWin.hasShadow(true);
    setupWin.setMenu(null);
    setupWin.on('closed', () => {
        setupWin = null
    })

    setupWin.on("ready-to-show", () => {
        setupWin.maximize();
    });

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
