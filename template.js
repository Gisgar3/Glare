var page = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Glare</title>
        </head>
        <body id="body">
            <center><h1 id="header">Good morning!</h1></center>
            <select id="selector" onchange="colorOptionChange()">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
            <script src="./design.js"></script>
        </body>
        <style>
            @font-face {
                font-family: "TitilliumWebFont";
                src:url("./assets/fonts/TitilliumWeb-Light.ttf");
            }
            h1 {
                font-family: "TitilliumWebFont";
                font-size: 80px;
                padding-top:340px;
                animation-name: fadein;
                animation-duration: 2s;
            }
            h2 {
                font-family: "TitilliumWebFont";
            }
            @keyframes fadein {
                from {opacity: 0.0;}
                to {opacity: 1.0;}
            }
            @keyframes colorfadetodark {
                from {background-color: white}
                to {background-color: gray}
            }
            @keyframes colorfadetolight {
                from {background-color: gray}
                to {background-color: white}
            }
    </html>
    `;
    document.write(page);
module.exports = page;