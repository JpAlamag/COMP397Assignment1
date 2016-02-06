var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// EXIT_BASEMENT SCENE
var scenes;
(function (scenes) {
    var ExitBasement = (function (_super) {
        __extends(ExitBasement, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function ExitBasement() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        ExitBasement.prototype.start = function () {
            // add exitBasement Image
            this._exitBasementImage = new createjs.Bitmap("../../Assets/images/ExitBasement.png");
            this.addChild(this._exitBasementImage);
            // add the Start Over button to the MENU scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // ExitBasement Scene updates here
        ExitBasement.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        ExitBasement.prototype._startOverButtonClick = function (event) {
            // Switch to the SYNOPSIS Scene
            scene = config.Scene.SYNOPSIS;
            changeScene();
        };
        return ExitBasement;
    })(objects.Scene);
    scenes.ExitBasement = ExitBasement;
})(scenes || (scenes = {}));
//# sourceMappingURL=exitBasement.js.map