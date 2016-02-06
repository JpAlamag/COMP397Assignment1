var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// KILL_SAM SCENE
var scenes;
(function (scenes) {
    var Fight = (function (_super) {
        __extends(Fight, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Fight() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Fight.prototype.start = function () {
            // add fight Image
            this._fightImage = new createjs.Bitmap("../../Assets/images/Fight.png");
            this.addChild(this._fightImage);
            // add the Start Over button to the MENU scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // FIGHT Scene updates here
        Fight.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        Fight.prototype._startOverButtonClick = function (event) {
            // Switch to the SYNOPSIS Scene
            scene = config.Scene.SYNOPSIS;
            changeScene();
        };
        return Fight;
    })(objects.Scene);
    scenes.Fight = Fight;
})(scenes || (scenes = {}));
//# sourceMappingURL=fight.js.map