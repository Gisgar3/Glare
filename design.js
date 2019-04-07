const userconfig = require("./config/user.json");

var dateandtime = new Date();
var fulltime = dateandtime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

var dateheader_element = document.getElementById("header");
var bottombar_element = document.getElementById("bottombar");
//bottombar_element.style.width = screen.width.toString() - "200";
dateheader_element.innerHTML = null;
console.log(dateandtime.getHours());
if (dateandtime.getHours() >= 0 && dateandtime.getHours() < 12) {
    dateheader_element.innerHTML = `<h1>Good morning, ${userconfig.username}</h1>`;
}
if (dateandtime.getHours() > 11 && dateandtime.getHours() < 24) {
    dateheader_element.innerHTML = `<h1>Good afternoon, ${userconfig.username}</h1>`;
}

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
