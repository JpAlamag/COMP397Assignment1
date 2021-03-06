var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// KEEP_RUNNING SCENE
var scenes;
(function (scenes) {
    var KeepRunning = (function (_super) {
        __extends(KeepRunning, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function KeepRunning() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        KeepRunning.prototype.start = function () {
            // add keepRunning Image
            this._keepRunningImage = new createjs.Bitmap("../../Assets/images/KeepRunning.png");
            this.addChild(this._keepRunningImage);
            // add the Start Over button to the MENU scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // KeepRunning Scene updates here
        KeepRunning.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        KeepRunning.prototype._startOverButtonClick = function (event) {
            // Switch to the SYNOPSIS Scene
            scene = config.Scene.SYNOPSIS;
            changeScene();
        };
        return KeepRunning;
    })(objects.Scene);
    scenes.KeepRunning = KeepRunning;
})(scenes || (scenes = {}));
//# sourceMappingURL=keepRunning.js.map