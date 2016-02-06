module config {

    // Scene Constants
    export class Scene {
        public static SYNOPSIS: number = 0;
        public static INTRO: number = 1;
        public static ASHLEY: number = 2;
        public static SAM: number = 3;
        public static SEWER: number = 4;
        public static BOILER_ROOM: number = 5;
        public static RUN: number = 6;
        public static HIDE: number = 7;
        public static KILL_SAM: number = 8;
        public static SAVE_SAM: number = 9;
        
 
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