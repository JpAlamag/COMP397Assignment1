﻿/// <reference path = "_reference.ts" />

// global variables
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var intro: scenes.Intro;
var ashley: scenes.Ashley;
var sam: scenes.Sam;
var synopsis: scenes.Synopsis;
var sewage: scenes.Sewage;
var boilerRoom: scenes.BoilerRoom;
var run: scenes.Run;
var hide: scenes.Hide;
var killSam: scenes.KillSam;
var saveSam: scenes.SaveSam;
var acceptHer: scenes.acceptHer;
var rejectHer: scenes.rejectHer;
var fight: scenes.Fight;
var giveUp: scenes.giveUp;
var exitBasement: scenes.ExitBasement;
var keepRunning: scenes.KeepRunning;

function init(): void {
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
function gameLoop(event: createjs.Event): void {
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
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
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
        case config.Scene.BOILER_ROOM:
            //show the BOILER_ROOM scene
            stage.removeAllChildren();
            boilerRoom = new scenes.BoilerRoom();
            currentScene = boilerRoom;
            console.log("Starting BOILER_ROOM Scene");
            break;
        case config.Scene.SEWAGE:
            //show the SEWAGE scene
            stage.removeAllChildren();
            sewage = new scenes.Sewage();
            currentScene = sewage;
            console.log ("Starting SEWAGE Scene");
            break;
        case config.Scene.SAM:
            // show the SAM scene
            stage.removeAllChildren();
            sam = new scenes.Sam();
            currentScene = sam;
            console.log("Starting SAM Scene");
            break;
        case config.Scene.RUN:
            // show the RUN scene
            stage.removeAllChildren();
            run = new scenes.Run();
            currentScene = run;
            console.log("Starting RUN Scene");
            break;
        case config.Scene.HIDE:
            // show the HIDE scene
            stage.removeAllChildren();
            hide = new scenes.Hide();
            currentScene = hide;
            console.log("Starting HIDE Scene");
            break;
        case config.Scene.KILL_SAM:
            // show the KILL_SAM scene
            stage.removeAllChildren();
            killSam = new scenes.KillSam();
            currentScene = killSam;
            console.log("Starting KILL_SAM Scene");
            break;
        case config.Scene.SAVE_SAM:
            // show the SAVE_SAM scene
            stage.removeAllChildren();
            saveSam = new scenes.SaveSam();
            currentScene = saveSam;
            console.log("Starting SAVE_SAM Scene");
            break;        
        case config.Scene.ACCEPT_HER:
            // show the ACCEPT_HER scene
            stage.removeAllChildren();
            acceptHer = new scenes.acceptHer();
            currentScene = acceptHer;
            console.log("Starting ACCEPT_HER Scene");
            break;
        case config.Scene.REJECT_HER:
            // show the REJECT_HER scene
            stage.removeAllChildren();
            rejectHer = new scenes.rejectHer();
            currentScene = rejectHer;
            console.log("Starting REJECT_HER Scene");
            break;
        case config.Scene.FIGHT:
            // show the FIGHT scene
            stage.removeAllChildren();
            fight = new scenes.Fight();
            currentScene = fight;
            console.log("Starting FIGHT Scene");
            break;           
        case config.Scene.GIVEUP:
            // show the GIVEUP scene
            stage.removeAllChildren();
            giveUp = new scenes.giveUp();
            currentScene = giveUp;
            console.log("Starting GIVEUP Scene");
            break; 
        case config.Scene.EXIT_BASEMENT:
            // show the EXIT_BASEMENT scene
            stage.removeAllChildren();
            exitBasement = new scenes.ExitBasement();
            currentScene = exitBasement;
            console.log("Starting EXIT_BASEMENT Scene");
            break;         
        case config.Scene.KEEP_RUNNING:
            // show the KEEP_RUNNING scene
            stage.removeAllChildren();
            keepRunning = new scenes.KeepRunning();
            currentScene = keepRunning;
            console.log("Starting KEEP_RUNNING Scene");
            break;    
           
            

    }

    console.log(currentScene.numChildren);
}