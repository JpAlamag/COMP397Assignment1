/// <reference path = "_reference.ts" />
// global variables
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var intro;
var ashley;
var sam;
var synopsis;
var sewer;
var boilerRoom;
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.SYNOPSIS;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.SYNOPSIS:
            // show the SYNOPSIS scene
            stage.removeAllChildren();
            synopsis = new scenes.Synopsis();
            currentScene = synopsis;
            console.log("Starting SYNOPSIS Scene");
            break;
        case config.Scene.INTRO:
            // show the INTRO scene
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            break;
        case config.Scene.ASHLEY:
            // show the ASHLEY scene
            stage.removeAllChildren();
            ashley = new scenes.Ashley();
            currentScene = ashley;
            console.log("Starting ASHLEY Scene");
            break;
        case config.Scene.SEWER:
            //show the SEWER scene
            stage.removeAllChildren();
            sewer = new scenes.Sewer();
            currentScene = sewer;
            console.log("Starting SEWER Scene");
            break;
        case config.Scene.BOILER_ROOM:
            //show the BOILER_ROOM scene
            stage.removeAllChildren();
            boilerRoom = new scenes.BoilerRoom();
            currentScene = boilerRoom;
            console.log("Starting BOILER_ROOM Scene");
            break;
        case config.Scene.SAM:
            // show the SAM scene
            stage.removeAllChildren();
            sam = new scenes.Sam();
            currentScene = sam;
            console.log("Starting SAM Scene");
    }
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map