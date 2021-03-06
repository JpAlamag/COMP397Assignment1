var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SYNOPSIS SCENE
var scenes;
(function (scenes) {
    var Synopsis = (function (_super) {
        __extends(Synopsis, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Synopsis() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Synopsis.prototype.start = function () {
            // add Synopsis Image
            this._synopsisImage = new createjs.Bitmap("../../Assets/images/Synopsis.png");
            this.addChild(this._synopsisImage);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("startButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // Synopsis Scene updates here
        Synopsis.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Start Button click event handler
        Synopsis.prototype._startButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return Synopsis;
    })(objects.Scene);
    scenes.Synopsis = Synopsis;
})(scenes || (scenes = {}));
//# sourceMappingURL=synopsis.js.map