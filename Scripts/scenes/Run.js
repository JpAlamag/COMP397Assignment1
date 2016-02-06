var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SAM SCENE
var scenes;
(function (scenes) {
    var Run = (function (_super) {
        __extends(Run, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Run() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Run.prototype.start = function () {
            // add Sam Image
            this._runImage = new createjs.Bitmap("../../Assets/images/Run.png");
            this.addChild(this._runImage);
            // add the Run button to the MENU scene
            this._killSamButton = new objects.Button("killSamButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._killSamButton);
            // Run Button event listener
            this._killSamButton.on("click", this._killSamButtonClick, this);
            // add the Hide button to the MENU scene
            this._saveSamButton = new objects.Button("hideButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._saveSamButton);
            // Hide Button event listener
            this._saveSamButton.on("click", this._saveSamButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // SAM Scene updates here
        Run.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Run Button click event handler
        Run.prototype._killSamButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        // Hide Button click event handler
        Run.prototype._saveSamButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        return Run;
    })(objects.Scene);
    scenes.Run = Run;
})(scenes || (scenes = {}));
//# sourceMappingURL=Run.js.map