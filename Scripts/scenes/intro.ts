// INTRO SCENE
module scenes {
    export class Intro extends objects.Scene {
        
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _introImage: createjs.Bitmap;
        private _ashleyButton: objects.Button;
        private _samButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._introImage = new createjs.Bitmap("../../Assets/images/Start.png");
            this.addChild(this._introImage);
            
            // add the Ashley button to the MENU scene
            this._ashleyButton = new objects.Button(
                "ashleyButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._ashleyButton);
            
            // Ashley Button event listener
            this._ashleyButton.on("click", this._ashleyButtonClick, this);
            
            // add the Sam button to the MENU scene
            this._samButton = new objects.Button(
                "samButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._samButton);
            
            // Sam Button event listener
            this._samButton.on("click", this._samButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // Ashley Button click event handler
        private _ashleyButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.ASHLEY;
            changeScene();
        }
        
        // Sam Button click event handler
        private _samButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.SAM;
            changeScene();
        }
    }
}