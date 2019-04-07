var page = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Glare</title>
        </head>
        <body id="body">
            <center><h1 id="header">Good morning!</h1></center>
            <select id="selector">
                <option id="option1">Light</option>
                <option id="selector-option2">Dark</option>
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
    </html>
    `;
    document.write(page);
module.exports = page;