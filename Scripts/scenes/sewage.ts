// SEWAGE SCENE
module scenes {
    export class Sewage extends objects.Scene {

        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _sewageImage: createjs.Bitmap;
        private _exitBasementButton: objects.Button;
        private _keepRunningButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add sewage Image
            this._sewageImage = new createjs.Bitmap("../../Assets/images/Sewage.png");
            this.addChild(this._sewageImage);
            
            // add the fightButton button to the MENU scene
            this._exitBasementButton = new objects.Button(
                "exitBasementButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._exitBasementButton);
            
            // fightButton Button event listener
            this._exitBasementButton.on("click", this._exitBasementButtonClick, this);
            
            // add the giveUpButton button to the MENU scene
            this._keepRunningButton = new objects.Button(
                "keepRunningButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._keepRunningButton);
            
            // giveUpButton Button event listener
            this._keepRunningButton.on("click", this._keepRunningButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);


        }

        // BOILER_ROOM Scene updates here
        public update(): void {

        }
               
        //EVENT HANDLERS ++++++++++++++++++++
        
        // fightButton Button click event handler
        private _exitBasementButtonClick(event: createjs.MouseEvent) {
            // Switch to the Cliff Scene
            scene = config.Scene.EXIT_BASEMENT;
            changeScene();
        }
        
        // giveUp Button click event handler
        private _keepRunningButtonClick(event: createjs.MouseEvent) {
            // Switch to the Cornered Scene
            scene = config.Scene.KEEP_RUNNING;
            changeScene();
        }

    }
}
