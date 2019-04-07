var page = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=1920, maximum-scale=1">
            <title>Glare</title>
        </head>
        <body id="body">
            <center><h1 id="header">N/A</h1></center>
            <div class="bottombar" id="bottombar">
                <label class="switch" id="colorswitch" onchange="colorOptionChange()">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
            </div>
            <script src="./design.js"></script>
        </body>
        <style>
            @font-face {
                font-family: "TitilliumWebFont";
                src:url("./assets/fonts/TitilliumWeb-Light.ttf");
            }
            h1 {
                font-family: "TitilliumWebFont";
                font-size: 75px;
                padding-top:140px;
                animation-name: fadein;
                animation-duration: 2s;
            }
            h2 {
                font-family: "TitilliumWebFont";
            }
            .bottombar {
                opacity: 0.2; 
                border-top-left-radius: 20px; 
                border-top-right-radius: 20px; 
                height: 75px; 
                width: 100%; 
                bottom: 0px; 
                left: 0px;
                right: 0px;
                position: fixed; 
                border-style: solid; 
                border-color: gray; 
                background-color: rgb(81, 81, 81);
            }

            .switch {
                position: relative;
                display: inline-block;
                width: 60px;
                height: 34px;
                margin-left: 35px;
                margin-top: 5px;
            }
            .switch input {
                opacity: 0;
                width: 0;
                height: 0;
            }
            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                -webkit-transition: .4s;
                transition: .4s;
            }
            .slider:before {
                position: absolute;
                content: "";
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                -webkit-transition: .4s;
                transition: .4s;
            }
            input:checked + .slider {
                background-color: #898989;
            }
            input:focus + .slider {
                box-shadow: 0 0 1px #898989;
            }
            input:checked + .slider:before {
                -webkit-transform: translateX(26px);
                -ms-transform: translateX(26px);
                transform: translateX(26px);
            }
            .slider.round {
                border-radius: 34px;
            }
            .slider.round:before {
                border-radius: 50%;
            }

            @keyframes fadein {
                from {opacity: 0.0;}
                to {opacity: 1.0;}
            }
            @keyframes colorfadetodark {
                from {background-color: white}
                to {background-color: rgb(21, 23, 25)}
            }
            @keyframes colorfadetolight {
                from {background-color: rgb(21, 23, 25)}
                to {background-color: white}
            }
            @keyframe textfadefordark {
                from {color: black}
                to {color: white}
            }
            @keyframe textfadeforlight {
                from {color: white}
                to {color: black}
            }
    </html>
    `;
    document.write(page);
module.exports = page;