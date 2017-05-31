bootGame={
   create:function(){
    game.physics.startSystem(Phaser.Physics.P2JS);
   	  
    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.scale.forceLandscape = true;
    game.scale.pageAlignHorizontally = true;
    game.scale.setScreenSize =true;
     game.world.setBounds(0, 0, 800, 600);

   

    game.state.start("preloadGame");
    


   },
	
}