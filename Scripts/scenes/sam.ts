// SAM SCENE
module scenes {
    export class Sam extends objects.Scene {

        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _samImage: createjs.Bitmap;
        private _runButton: objects.Button;
        private _hideButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Sam Image
            this._samImage = new createjs.Bitmap("../../Assets/images/Sam.png");
            this.addChild(this._samImage);
            
            // add the Run button to the MENU scene
            this._runButton = new objects.Button(
                "runButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._runButton);
            
            // Run Button event listener
            this._runButton.on("click", this._runButtonClick, this);
            
            // add the Hide button to the MENU scene
            this._hideButton = new objects.Button(
                "hideButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._hideButton);
            
            // Hide Button event listener
            this._hideButton.on("click", this._hideButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);


        }

        // SAM Scene updates here
        public update(): void {

        }
               
        //EVENT HANDLERS ++++++++++++++++++++
        
        // Run Button click event handler
        private _runButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.RUN;
            changeScene();
        }
        
        // Hide Button click event handler
        private _hideButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INTRO;
            changeScene();
        }

    }
}
