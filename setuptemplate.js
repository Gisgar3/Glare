var page = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Panel Setup</title>
    </head>
    <body id="body">
        <div id="flex-container">
<<<<<<< HEAD
            <center><h1>Panel Setup</h1></center>
=======

>>>>>>> cd6e30b779caece7bb65f8fde6e5c226a0eed1ba
        </div>
    </body>
    <style>
    @font-face {
        font-family: "TitilliumWebFont";
        src:url("./assets/fonts/TitilliumWeb-Light.ttf");
    }
<<<<<<< HEAD
    h1 {
        font-family: "TitilliumWebFont";
        font-size: 50px;
    }
=======
>>>>>>> cd6e30b779caece7bb65f8fde6e5c226a0eed1ba
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