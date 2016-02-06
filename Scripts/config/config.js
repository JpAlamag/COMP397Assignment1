var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.SYNOPSIS = 0;
        Scene.INTRO = 1;
        Scene.ASHLEY = 2;
        Scene.SAM = 3;
        Scene.SEWER = 4;
        Scene.BOILER_ROOM = 5;
        Scene.RUN = 6;
        Scene.HIDE = 7;
        Scene.KILL_SAM = 8;
        Scene.SAVE_SAM = 9;
        Scene.ACCEPT_HER = 10;
        Scene.REJECT_HER = 11;
        Scene.FIGHT = 12;
        Scene.GIVE_UP = 13;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map