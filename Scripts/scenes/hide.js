var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// HIDE SCENE
var scenes;
(function (scenes) {
    var Hide = (function (_super) {
        __extends(Hide, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Hide() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Hide.prototype.start = function () {
            // add Hide Image
            this._hideImage = new createjs.Bitmap("../../Assets/images/Hide.png");
            this.addChild(this._hideImage);
            // add the accept button to the MENU scene
            this._acceptButton = new objects.Button("acceptButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._acceptButton);
            // accept Button event listener
            this._acceptButton.on("click", this._acceptButtonClick, this);
            // add the reject button to the MENU scene
            this._rejectButton = new objects.Button("rejectButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._rejectButton);
            // reject Button event listener
            this._rejectButton.on("click", this._rejectButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // HIDE Scene updates here
        Hide.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // accept Button click event handler
        Hide.prototype._acceptButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.ACCEPT_HER;
            changeScene();
        };
        // reject Button click event handler
        Hide.prototype._rejectButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.REJECT_HER;
            changeScene();
        };
        return Hide;
    })(objects.Scene);
    scenes.Hide = Hide;
})(scenes || (scenes = {}));
//# sourceMappingURL=hide.js.map