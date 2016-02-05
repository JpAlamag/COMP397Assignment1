var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var Sam = (function (_super) {
        __extends(Sam, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Sam() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Sam.prototype.start = function () {
            // add LeftCave Image
            this._samImage = new createjs.Bitmap("../../Assets/images/Sam.png");
            this.addChild(this._samImage);
            // add the LEFT_CAVE button to the MENU scene
            this._runButton = new objects.Button("runButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._runButton);
            // LEFT_CAVE Button event listener
            this._runButton.on("click", this._runButtonClick, this);
            // add the LEFT_CAVE button to the MENU scene
            this._hideButton = new objects.Button("hideButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._hideButton);
            // LEFT_CAVE Button event listener
            this._hideButton.on("click", this._hideButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Sam.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        Sam.prototype._runButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        // LEFT_CAVE Button click event handler
        Sam.prototype._hideButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return Sam;
    })(objects.Scene);
    scenes.Sam = Sam;
})(scenes || (scenes = {}));
//# sourceMappingURL=sam.js.map