var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SEWAGE SCENE
var scenes;
(function (scenes) {
    var Sewage = (function (_super) {
        __extends(Sewage, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Sewage() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Sewage.prototype.start = function () {
            // add sewage Image
            this._sewageImage = new createjs.Bitmap("../../Assets/images/Sewage.png");
            this.addChild(this._sewageImage);
            // add the fightButton button to the MENU scene
            this._exitBasementButton = new objects.Button("exitBasementButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._exitBasementButton);
            // fightButton Button event listener
            this._exitBasementButton.on("click", this._exitBasementButtonClick, this);
            // add the giveUpButton button to the MENU scene
            this._keepRunningButton = new objects.Button("keepRunningButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._keepRunningButton);
            // giveUpButton Button event listener
            this._keepRunningButton.on("click", this._keepRunningButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // BOILER_ROOM Scene updates here
        Sewage.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // fightButton Button click event handler
        Sewage.prototype._exitBasementButtonClick = function (event) {
            // Switch to the Cliff Scene
            scene = config.Scene.EXIT_BASEMENT;
            changeScene();
        };
        // giveUp Button click event handler
        Sewage.prototype._keepRunningButtonClick = function (event) {
            // Switch to the Cornered Scene
            scene = config.Scene.KEEP_RUNNING;
            changeScene();
        };
        return Sewage;
    })(objects.Scene);
    scenes.Sewage = Sewage;
})(scenes || (scenes = {}));
//# sourceMappingURL=sewage.js.map