// LEFT_CAVE SCENE
module scenes {
    export class Synopsis extends objects.Scene {

        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _synopsisImage: createjs.Bitmap;
        private _startButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add LeftCave Image
            this._synopsisImage = new createjs.Bitmap("../../Assets/images/Synopsis.png");
            this.addChild(this._synopsisImage);
            
            // add the LEFT_CAVE button to the MENU scene
            this._startButton = new objects.Button(
                "startButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._startButton);
            
            // LEFT_CAVE Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);


        }

        // PLAY Scene updates here
        public update(): void {

        }
               
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}