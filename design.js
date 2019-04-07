var dateandtime = new Date();
var fulltime = dateandtime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

var date_element = document.getElementById("header");
date_element.innerHTML = null;
date_element.innerHTML = `${fulltime}`;

document.getElementById("selector").addEventListener("click", function() {document.getElementById("body").setAttribute("style", "background-color:green"); document.getElementById("header").setAttribute("style", "color: white");});
