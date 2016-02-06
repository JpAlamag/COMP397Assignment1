// ACCEPT_HER SCENE
module scenes {
    export class acceptHer extends objects.Scene {

        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _acceptHerImage: createjs.Bitmap;
        private _startOverButton: objects.Button;

        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add acceptHer Image
            this._acceptHerImage = new createjs.Bitmap("../../Assets/images/AcceptHer.png");
            this.addChild(this._acceptHerImage);
            
            // add the Start Over button to the MENU scene
            this._startOverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
           
            // add this scene to the global stage container
            stage.addChild(this);
            
        }

        // ACCEPT_HER Scene updates here
        public update(): void {

        }
               
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _startOverButtonClick(event: createjs.MouseEvent) {
            // Switch to the SYNOPSIS Scene
            scene = config.Scene.SYNOPSIS;
            changeScene();
        }
    }
}
