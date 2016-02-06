var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// ACCEPT_HER SCENE
var scenes;
(function (scenes) {
    var acceptHer = (function (_super) {
        __extends(acceptHer, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function acceptHer() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        acceptHer.prototype.start = function () {
            // add acceptHer Image
            this._acceptHerImage = new createjs.Bitmap("../../Assets/images/AcceptHer.png");
            this.addChild(this._acceptHerImage);
            // add the Start Over button to the MENU scene
            this._startOverButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // ACCEPT_HER Scene updates here
        acceptHer.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        acceptHer.prototype._startOverButtonClick = function (event) {
            // Switch to the SYNOPSIS Scene
            scene = config.Scene.SYNOPSIS;
            changeScene();
        };
        return acceptHer;
    })(objects.Scene);
    scenes.acceptHer = acceptHer;
})(scenes || (scenes = {}));
//# sourceMappingURL=acceptHer.js.map