const userconfig = require("./config/user.json");

var dateandtime = new Date();
var fulltime = dateandtime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

var date_element = document.getElementById("header");
date_element.innerHTML = null;
date_element.innerHTML = `Good morning, ${userconfig.username}`;

function colorOptionChange() {
    if (document.getElementById("selector").getElementsByTagName("option")[0].selected == true) {
        document.getElementById("body").setAttribute("style", "background-color:white; animation-name: colorfadetolight; animation-duration: 2s;");
    }
    else {
        document.getElementById("body").setAttribute("style", "background-color:gray; animation-name: colorfadetodark; animation-duration: 2s;");
        
    }
}