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
                <div class="flex-container">
                    <div style="border-right-style: solid; border-right-color: gray; padding-right:20px;">
                        <center><label class="switch" id="colorswitch" onchange="colorOptionChange()">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label></center>
                        <center><h2>Dark Mode</h2></center>
                    </div>
                    <div>
<<<<<<< HEAD
                        <center><button src="./setupdesign.js" onclick="handleClick()" class="button" id="setupbutton" style="margin-top:5px;">Setup</button></center>
=======
                        <center><button class="button" id="setupbutton" onclick="handleSetup()" style="margin-top:5px;">Setup</button></center>
>>>>>>> cd6e30b779caece7bb65f8fde6e5c226a0eed1ba
                    </div>
                </div>
            </div>
            <script src="./maindesign.js"></script>
        </body>
        <style>
            ::selection {
                background: #0d2244;
            }
            .button {
                background-color: #ccc;
                border: none;
                color: white;
                padding: 20px 26px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                font-family: "TitilliumWebFont";
                cursor: pointer;
                border-radius: 10px;
                user-select: none;
                outline-width: 0;
                transition: border-radius .3s, background-color .3s;
                
            }
            .button:hover {
                border-radius:20px;
                background-color: #777777;
            }
            @font-face {
                font-family: "TitilliumWebFont";
                src:url("./assets/fonts/TitilliumWeb-Light.ttf");
            }
            h1 {
                font-family: "TitilliumWebFont";
                font-size: 85px;
<<<<<<< HEAD
                // padding-top:140px;
                animation-name: fadein;
                animation-duration: 2s;
                user-select: none;
                transform: translateY(50%);
=======
                padding-top:140px;
                animation-name: fadein;
                animation-duration: 2s;
                user-select: none;
>>>>>>> cd6e30b779caece7bb65f8fde6e5c226a0eed1ba
            }
            h2 {
                font-family: "TitilliumWebFont";
                font-size: 20px;
                margin-top: 0px;
                color: white;
                user-select: none;
            }
            .bottombar {
                border-top-left-radius: 20px; 
                border-top-right-radius: 20px; 
                height: 75px; 
                width: 100%; 
                bottom: 0px; 
                left: 0px;
                right: 0px;
                position: fixed; 
                border-left-style: solid; 
                border-right-style: solid; 
                border-top-style: solid; 
                border-color: gray; 
                background-color: rgb(81, 81, 81);
            }
            .flex-container {
                display: flex;
                flex-direction: row;
            }
            .flex-container > div {
                width:100px;
                height:75px;
                margin-left:20px;
            }

            .switch {
                position: relative;
                display: inline-block;
                width: 60px;
                height: 34px;
                // margin-left: 35px;
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