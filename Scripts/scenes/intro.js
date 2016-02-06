var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var Intro = (function (_super) {
        __extends(Intro, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Intro() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Intro.prototype.start = function () {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/Start.png");
            this.addChild(this._introImage);
            // add the Ashley button to the MENU scene
            this._ashleyButton = new objects.Button("ashleyButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._ashleyButton);
            // Ashley Button event listener
            this._ashleyButton.on("click", this._ashleyButtonClick, this);
            // add the Sam button to the MENU scene
            this._samButton = new objects.Button("samButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._samButton);
            // Sam Button event listener
            this._samButton.on("click", this._samButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Intro.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Ashley Button click event handler
        Intro.prototype._ashleyButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.ASHLEY;
            changeScene();
        };
        // Sam Button click event handler
        Intro.prototype._samButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.SAM;
            changeScene();
        };
        return Intro;
    })(objects.Scene);
    scenes.Intro = Intro;
})(scenes || (scenes = {}));
//# sourceMappingURL=intro.js.map