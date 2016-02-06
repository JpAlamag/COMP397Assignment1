// ASHLEY SCENE
module scenes {
    export class Ashley extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _ashleyImage: createjs.Bitmap;
        private _sewerButton: objects.Button;
        private _boilerRoomButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Ashley Image
            this._ashleyImage = new createjs.Bitmap("../../Assets/images/Ashley.png");
            this.addChild(this._ashleyImage);
            
            // add the Sewer button to the MENU scene
            this._sewerButton = new objects.Button(
                "sewerButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._sewerButton);
            
            // Sewer Button event listener
            this._sewerButton.on("click", this._sewerButtonClick, this);
            
            // add the BoilerRoom button to the MENU scene
            this._boilerRoomButton = new objects.Button(
                "boilerRoomButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._boilerRoomButton);
            
            // LEFT_CAVE Button event listener
            this._boilerRoomButton.on("click", this._boilerRoomButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);


        }

        // ASHLEY Scene updates here
        public update(): void {

        }
               
        //EVENT HANDLERS ++++++++++++++++++++
        
        // Sewer Button click event handler
        private _sewerButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.SEWER;
            changeScene();
        }
        
        // BoilerRoom Button click event handler
        private _boilerRoomButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.BOILER_ROOM;
            changeScene();
        }

    }
}

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