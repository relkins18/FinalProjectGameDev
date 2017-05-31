menuGame={
	preload : function() {
       game.load.image('bg1', 'img/titlepage.png');
       game.load.image('btnstart', 'img/btnstart.png');
       game.load.image('btnexit', 'img/exit.png');
        
    },
	create:function(){
		  bg1= game.add.image(0,0,"bg1");
 		

 		startButton = game.add.button(game.world.centerX - 50, 380, 'button', menuGame.go, this, 2, 1, 0); 
 		


		 
	
	
       


	},

	startGame: function () {

        // Change the state to the actual game.
      
		 bg1.visible =!startButton.visible;
         startButton.visible = false;
              
         startButton.destroy();
        
		 game.state.start("playGame");
     	

    

		   

	},
	go: function(){
		 game.state.start("playGame");
	},
	exitButtonClick: function () { 
	   if (confirm("Exit FlyTime?")) {    
	       navigator.app.exitApp();    };
	   }

}
