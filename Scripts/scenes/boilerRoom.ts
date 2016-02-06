// BOILER_ROOM SCENE
module scenes {
    export class BoilerRoom extends objects.Scene {

        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _boilerRoomImage: createjs.Bitmap;
        private _fightButton: objects.Button;
        private _giveUpButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add BoilerRoom Image
            this._boilerRoomImage = new createjs.Bitmap("../../Assets/images/BoilerRoom.png");
            this.addChild(this._boilerRoomImage);
            
            // add the fightButton button to the MENU scene
            this._fightButton = new objects.Button(
                "fightButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._fightButton);
            
            // fightButton Button event listener
            this._fightButton.on("click", this._fightButtonClick, this);
            
            // add the giveUpButton button to the MENU scene
            this._giveUpButton = new objects.Button(
                "giveUpButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._giveUpButton);
            
            // giveUpButton Button event listener
            this._giveUpButton.on("click", this._giveUpButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);


        }

        // BOILER_ROOM Scene updates here
        public update(): void {

        }
               
        //EVENT HANDLERS ++++++++++++++++++++
        
        // fightButton Button click event handler
        private _fightButtonClick(event: createjs.MouseEvent) {
            // Switch to the Cliff Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
        
        // LEFT_CAVE Button click event handler
        private _giveUpButtonClick(event: createjs.MouseEvent) {
            // Switch to the Cornered Scene
            scene = config.Scene.INTRO;
            changeScene();
        }

    }
}
