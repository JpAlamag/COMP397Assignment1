var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// KILL_SAM SCENE
var scenes;
(function (scenes) {
    var KillSam = (function (_super) {
        __extends(KillSam, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function KillSam() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        KillSam.prototype.start = function () {
            // add Sam Image
            this._killSamImage = new createjs.Bitmap("../../Assets/images/KillSam.png");
            this.addChild(this._killSamImage);
            // add the Start Over button to the MENU scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // Kill_SAM Scene updates here
        KillSam.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        KillSam.prototype._startOverButtonClick = function (event) {
            // Switch to the SYNOPSIS Scene
            scene = config.Scene.SYNOPSIS;
            changeScene();
        };
        return KillSam;
    })(objects.Scene);
    scenes.KillSam = KillSam;
})(scenes || (scenes = {}));
//# sourceMappingURL=killSam.js.map