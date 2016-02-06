// HIDE SCENE
module scenes {
    export class Hide extends objects.Scene {

        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _hideImage: createjs.Bitmap;
        private _acceptButton: objects.Button;
        private _rejectButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Hide Image
            this._hideImage = new createjs.Bitmap("../../Assets/images/Hide.png");
            this.addChild(this._hideImage);
            
            // add the accept button to the MENU scene
            this._acceptButton = new objects.Button(
                "acceptButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._acceptButton);
            
            // accept Button event listener
            this._acceptButton.on("click", this._acceptButtonClick, this);
            
            // add the reject button to the MENU scene
            this._rejectButton = new objects.Button(
                "rejectButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._rejectButton);
            
            // reject Button event listener
            this._rejectButton.on("click", this._rejectButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);


        }

        // HIDE Scene updates here
        public update(): void {

        }
               
        //EVENT HANDLERS ++++++++++++++++++++
        
        // accept Button click event handler
        private _acceptButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
        
        // reject Button click event handler
        private _rejectButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INTRO;
            changeScene();
        }

    }
}
