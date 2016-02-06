// SEWER SCENE
module scenes {
    export class Sewer extends objects.Scene {

        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sewerImage: createjs.Bitmap;
        private _keepRunningButton: objects.Button;
        private _exitBasementButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Sewer Image
            this._sewerImage = new createjs.Bitmap("../../Assets/images/Sewer.png");
            this.addChild(this._sewerImage);
            
            // add the KeepRunning button to the MENU scene
            this._keepRunningButton = new objects.Button(
                "KeepRunningButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._keepRunningButton);
            
            // KeepRunning Button event listener
            this._exitBasementButton.on("click", this._keepRunningButtonClick, this);
            
            // add the ExitBasement button to the MENU scene
            this._exitBasementButton = new objects.Button(
                "ExitBasementButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._exitBasementButton);
            
            // ExitBasement Button event listener
            this._exitBasementButton.on("click", this._exitBasementButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);


        }

        // Sewer Scene updates here
        public update(): void {

        }
               
        //EVENT HANDLERS ++++++++++++++++++++
        
        // KeepRunning Button click event handler
        private _keepRunningButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
        
        // ExitBasement Button click event handler
        private _exitBasementButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INTRO;
            changeScene();
        }

    }
}
