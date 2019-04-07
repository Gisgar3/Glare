var page = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Panel Setup</title>
    </head>
    <body id="body">
        <div id="flex-container">
            <center><h1>Panel Setup</h1></center>
        </div>
    </body>
    <style>
    @font-face {
        font-family: "TitilliumWebFont";
        src:url("./assets/fonts/TitilliumWeb-Light.ttf");
    }
    h1 {
        font-family: "TitilliumWebFont";
        font-size: 50px;
    }
    .flex-container {
        display: flex;
        flex-direction: column;
    }
    .flex-container > div {
        width:450px;
        height:200px;
    }
    </style>
</html>
`;
document.write(page);
module.exports(page);