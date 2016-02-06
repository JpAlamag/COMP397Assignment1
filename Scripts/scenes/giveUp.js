var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// KILL_SAM SCENE
var scenes;
(function (scenes) {
    var giveUp = (function (_super) {
        __extends(giveUp, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function giveUp() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        giveUp.prototype.start = function () {
            // add giveUp Image
            this._giveUpImage = new createjs.Bitmap("../../Assets/images/GiveUp.png");
            this.addChild(this._giveUpImage);
            // add the Start Over button to the MENU scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // GIVE_UP Scene updates here
        giveUp.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        giveUp.prototype._startOverButtonClick = function (event) {
            // Switch to the SYNOPSIS Scene
            scene = config.Scene.SYNOPSIS;
            changeScene();
        };
        return giveUp;
    })(objects.Scene);
    scenes.giveUp = giveUp;
})(scenes || (scenes = {}));
//# sourceMappingURL=giveUp.js.map