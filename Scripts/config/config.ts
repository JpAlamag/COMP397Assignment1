﻿module config {

    // Scene Constants
    export class Scene {
        public static SYNOPSIS: number = 0;
        public static INTRO: number = 1;
        public static ASHLEY: number = 2;
        public static SAM: number = 3;
        public static SEWAGE: number = 4;
        public static BOILER_ROOM: number = 5;
        public static RUN: number = 6;
        public static HIDE: number = 7;
        public static KILL_SAM: number = 8;
        public static SAVE_SAM: number = 9;
        public static ACCEPT_HER: number = 10;
        public static REJECT_HER: number = 11;
        public static FIGHT: number = 12;
        public static GIVEUP: number = 13;
        public static EXIT_BASEMENT: number = 14;
        public static KEEP_RUNNING: number = 15;

        
 
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}