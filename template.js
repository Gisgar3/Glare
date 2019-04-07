var page = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Glare</title>
        </head>
        <body id="body">
            <h1 id="header">Hello World</h1>
            <h2 id="header2">Test</h2>
            <script src="./design.js"></script>
        </body>
        <style>
            @font-face {
                font-family: "TitilliumWebFont";
                src:url("./assets/fonts/TitilliumWeb-Light.ttf");
            }
            h1 {
                font-family: "TitilliumWebFont";
            }
            h2 {
                font-family: "TitilliumWebFont";
            }
    </html>
    `;
    document.write(page);
module.exports = page;