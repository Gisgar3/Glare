<<<<<<< HEAD
//const userdataconfig = require("./config/user.json");
const apiconfig = require("./config/apidata.json");
const remote = require("electron").remote;
const url = require("url");
const path = require("path");

function handleClick() {
    const BrowserWindow = remote.BrowserWindow;
    let setupWin = new BrowserWindow({ show: false });
    setupWin.setSize(800, 600);
    setupWin.loadURL(url.format({
        pathname: path.join(__dirname, "/", 'setup.html'),
        protocol: 'file:',
        slashes: true
    }));
    //setupWin.webContents.openDevTools();
    setupWin.hasShadow(true);
    setupWin.setMenu(null);
    setupWin.on('closed', () => {
        setupWin = null
    })

    setupWin.on("ready-to-show", () => {
        setupWin.show();
    });
}
var exports = module.exports = {handleClick};
=======
const userconfig = require("./config/user.json");
const apiconfig = require("./config/apidata.json");
const {BrowserWindow} = require("electron");

>>>>>>> cd6e30b779caece7bb65f8fde6e5c226a0eed1ba
