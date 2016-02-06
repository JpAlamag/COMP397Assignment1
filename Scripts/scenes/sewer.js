var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SEWER SCENE
var scenes;
(function (scenes) {
    var Sewer = (function (_super) {
        __extends(Sewer, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Sewer() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Sewer.prototype.start = function () {
            // add Sewer Image
            this._sewerImage = new createjs.Bitmap("../../Assets/images/Sewer.png");
            this.addChild(this._sewerImage);
            // add the KeepRunning button to the MENU scene
            this._keepRunningButton = new objects.Button("KeepRunningButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._keepRunningButton);
            // KeepRunning Button event listener
            this._exitBasementButton.on("click", this._keepRunningButtonClick, this);
            // add the ExitBasement button to the MENU scene
            this._exitBasementButton = new objects.Button("ExitBasementButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._exitBasementButton);
            // ExitBasement Button event listener
            this._exitBasementButton.on("click", this._exitBasementButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // Sewer Scene updates here
        Sewer.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // KeepRunning Button click event handler
        Sewer.prototype._keepRunningButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        // ExitBasement Button click event handler
        Sewer.prototype._exitBasementButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return Sewer;
    })(objects.Scene);
    scenes.Sewer = Sewer;
})(scenes || (scenes = {}));
//# sourceMappingURL=sewer.js.map