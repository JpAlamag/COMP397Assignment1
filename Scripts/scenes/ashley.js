var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// ASHLEY SCENE
var scenes;
(function (scenes) {
    var Ashley = (function (_super) {
        __extends(Ashley, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Ashley() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Ashley.prototype.start = function () {
            // add Ashley Image
            this._ashleyImage = new createjs.Bitmap("../../Assets/images/Ashley.png");
            this.addChild(this._ashleyImage);
            // add the Sewer button to the MENU scene
            this._sewerButton = new objects.Button("sewerButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._sewerButton);
            // Sewer Button event listener
            this._sewerButton.on("click", this._sewerButtonClick, this);
            // add the BoilerRoom button to the MENU scene
            this._boilerRoomButton = new objects.Button("boilerRoomButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._boilerRoomButton);
            // BoilerRoom Button event listener
            this._boilerRoomButton.on("click", this._boilerRoomButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // ASHLEY Scene updates here
        Ashley.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Sewer Button click event handler
        Ashley.prototype._sewerButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        // BoilerRoom Button click event handler
        Ashley.prototype._boilerRoomButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.BOILER_ROOM;
            changeScene();
        };
        return Ashley;
    })(objects.Scene);
    scenes.Ashley = Ashley;
})(scenes || (scenes = {}));
/*        // add the BACK button to the OVER scene
        this._startOverButton = new objects.Button(
            "StartOverButton",
            config.Screen.CENTER_X,
            config.Screen.CENTER_Y + 180);
        this.addChild(this._startOverButton);
       
        // START_OVER Button event listener
        this._startOverButton.on("click", this._startOverButtonClick, this);


        // add this scene to the global stage container
        stage.addChild(this);*/
//EVENT HANDLERS ++++++++++++++++++++
/*
// START_OVER Button click event handler
private _startOverButtonClick(event: createjs.MouseEvent) {
// Switch to the INTRO Scene
scene = config.Scene.INTRO;
changeScene();
}*/ 
//# sourceMappingURL=ashley.js.map