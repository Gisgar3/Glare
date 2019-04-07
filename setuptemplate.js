var page = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Panel Setup</title>
    </head>
    <body id="body">
        <div id="flex-container">

        </div>
    </body>
    <style>
    @font-face {
        font-family: "TitilliumWebFont";
        src:url("./assets/fonts/TitilliumWeb-Light.ttf");
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