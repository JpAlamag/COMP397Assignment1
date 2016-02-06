var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// KILL_SAM SCENE
var scenes;
(function (scenes) {
    var SaveSam = (function (_super) {
        __extends(SaveSam, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SaveSam() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SaveSam.prototype.start = function () {
            // add Sam Image
            this._saveSamImage = new createjs.Bitmap("../../Assets/images/SaveSam.png");
            this.addChild(this._saveSamImage);
            // add the Start Over button to the MENU scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // Kill_SAM Scene updates here
        SaveSam.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        SaveSam.prototype._startOverButtonClick = function (event) {
            // Switch to the SYNOPSIS Scene
            scene = config.Scene.SYNOPSIS;
            changeScene();
        };
        return SaveSam;
    })(objects.Scene);
    scenes.SaveSam = SaveSam;
})(scenes || (scenes = {}));
//# sourceMappingURL=saveSam.js.map