var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// BOILER_ROOM SCENE
var scenes;
(function (scenes) {
    var BoilerRoom = (function (_super) {
        __extends(BoilerRoom, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function BoilerRoom() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        BoilerRoom.prototype.start = function () {
            // add BoilerRoom Image
            this._boilerRoomImage = new createjs.Bitmap("../../Assets/images/BoilerRoom.png");
            this.addChild(this._boilerRoomImage);
            // add the fightButton button to the MENU scene
            this._fightButton = new objects.Button("fightButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._fightButton);
            // fightButton Button event listener
            this._fightButton.on("click", this._fightButtonClick, this);
            // add the giveUpButton button to the MENU scene
            this._giveUpButton = new objects.Button("giveUpButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._giveUpButton);
            // giveUpButton Button event listener
            this._giveUpButton.on("click", this._giveUpButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // BOILER_ROOM Scene updates here
        BoilerRoom.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // fightButton Button click event handler
        BoilerRoom.prototype._fightButtonClick = function (event) {
            // Switch to the Cliff Scene
            scene = config.Scene.FIGHT;
            changeScene();
        };
        // giveUp Button click event handler
        BoilerRoom.prototype._giveUpButtonClick = function (event) {
            // Switch to the Cornered Scene
            scene = config.Scene.GIVEUP;
            changeScene();
        };
        return BoilerRoom;
    })(objects.Scene);
    scenes.BoilerRoom = BoilerRoom;
})(scenes || (scenes = {}));
//# sourceMappingURL=boilerRoom.js.map