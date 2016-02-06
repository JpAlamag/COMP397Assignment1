var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// ACCEPT_HER SCENE
var scenes;
(function (scenes) {
    var rejectHer = (function (_super) {
        __extends(rejectHer, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function rejectHer() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        rejectHer.prototype.start = function () {
            // add rejectHer Image
            this._rejectHerImage = new createjs.Bitmap("../../Assets/images/RejectHer.png");
            this.addChild(this._rejectHerImage);
            // add the Start Over button to the MENU scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // RejectHer Scene updates here
        rejectHer.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        rejectHer.prototype._startOverButtonClick = function (event) {
            // Switch to the SYNOPSIS Scene
            scene = config.Scene.SYNOPSIS;
            changeScene();
        };
        return rejectHer;
    })(objects.Scene);
    scenes.rejectHer = rejectHer;
})(scenes || (scenes = {}));
//# sourceMappingURL=rejectHer.js.map