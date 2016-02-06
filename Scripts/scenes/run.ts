// RUN SCENE
module scenes {
    export class Run extends objects.Scene {

        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _runImage: createjs.Bitmap;
        private _killSamButton: objects.Button;
        private _saveSamButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Run Image
            this._runImage = new createjs.Bitmap("../../Assets/images/Run.png");
            this.addChild(this._runImage);
            
            // add the Run button to the MENU scene
            this._killSamButton = new objects.Button(
                "killSamButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._killSamButton);
            
            // Run Button event listener
            this._killSamButton.on("click", this._killSamButtonClick, this);
            
            // add the Hide button to the MENU scene
            this._saveSamButton = new objects.Button(
                "saveSamButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._saveSamButton);
            
            // Hide Button event listener
            this._saveSamButton.on("click", this._saveSamButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);


        }

        // SAM Scene updates here
        public update(): void {

        }
               
        //EVENT HANDLERS ++++++++++++++++++++
        
        // Run Button click event handler
        private _killSamButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
        
        // Hide Button click event handler
        private _saveSamButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INTRO;
            changeScene();
        }

    }
}
