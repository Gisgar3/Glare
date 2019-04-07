<<<<<<< HEAD
const userdataconfig = require("./config/user.json");
const apiconfig = require("./config/apidata.json");
const {BrowserWindow} = require("electron");
const setupwindow = require("./setupdesign.js");
=======
const userconfig = require("./config/user.json");
const apiconfig = require("./config/apidata.json");
const {BrowserWindow} = require("electron");
>>>>>>> cd6e30b779caece7bb65f8fde6e5c226a0eed1ba

var dateandtime = new Date();
var fulltime = dateandtime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

var dateheader_element = document.getElementById("header");
var bottombar_element = document.getElementById("bottombar");

dateheader_element.innerHTML = null;
console.log(dateandtime.getHours());
if (dateandtime.getHours() >= 0 && dateandtime.getHours() < 12) {
<<<<<<< HEAD
    dateheader_element.innerHTML = `<h1>Good morning, ${userdataconfig.username}</h1>`;
}
if (dateandtime.getHours() > 11 && dateandtime.getHours() < 24) {
    dateheader_element.innerHTML = `<h1>Good afternoon, ${userdataconfig.username}</h1>`;
}


=======
    dateheader_element.innerHTML = `<h1>Good morning, ${userconfig.username}</h1>`;
}
if (dateandtime.getHours() > 11 && dateandtime.getHours() < 24) {
    dateheader_element.innerHTML = `<h1>Good afternoon, ${userconfig.username}</h1>`;
}

>>>>>>> cd6e30b779caece7bb65f8fde6e5c226a0eed1ba
function colorOptionChange() {
    if (document.getElementById("colorswitch").getElementsByTagName("input")[0].checked == false) {
        document.getElementById("body").setAttribute("style", "background-color:white; animation-name: colorfadetolight; animation-duration: 1s;");
        document.getElementById("header").setAttribute("style", "color:black; animation-name: textfadeforlight; animation-duration: 2s;");
    }
    else {
        document.getElementById("body").setAttribute("style", "background-color:rgb(21, 23, 25); animation-name: colorfadetodark; animation-duration: 1s;");
        document.getElementById("header").setAttribute("style", "color:white; animation-name: textfadefordark; animation-duration: 2s;");
    }
}

<<<<<<< HEAD
function handleClick() {
    setupwindow.handleClick();
}

=======
// Handles the "Setup" button
function handleSetup() {
    let setupWin = new BrowserWindow();
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
>>>>>>> cd6e30b779caece7bb65f8fde6e5c226a0eed1ba
