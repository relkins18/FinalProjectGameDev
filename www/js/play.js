playGame={
	 	create:function() {
     	game.add.sprite(0,0,"bg");


        player = game.add.sprite(400,530,"kid");
        
        
      	platforms=game.add.group();	
      	platforms.enableBody = true;
      	game.physics.arcade.enable(player);
      	//Ground/platforms
        
        player.body.checkCollision.up = false;
        player.body.checkCollision.right = false;
        player.body.checkCollision.left = false;
   

       

        ground =platforms.create(10,580,'lupa');
    	  ground.body.immovable=true;
      	ground.scale.x=1.94;	

        ground =platforms.create(15,173.9,'lupa');
        ground.body.immovable=true;
        ground.scale.x=.4;



        ground =platforms.create(15,480.8,'lupa');
        ground.body.immovable=true;
        ground.scale.x=.4;

        ground =platforms.create(626,173.9,'lupa');
        ground.body.immovable=true;
        ground.scale.x=.4;

        ground =platforms.create(626,320,'lupa');
        ground.body.immovable=true;
        ground.scale.x=.4;


        ground =platforms.create(626,480.8,'lupa');
        ground.body.immovable=true;
        ground.scale.x=.4;





        ground =platforms.create(15,320,'lupa');
        ground.body.immovable=true;
        ground.scale.x=.4;

        //gound maliit
      //1
        ground = platforms.create(220,200, 'lupa');
        ground.body.immovable= true;
        ground.scale.x=.2;
        //2
        ground = platforms.create(220,260, 'lupa');
        ground.body.immovable= true;
        ground.scale.x=.2;

//3
        ground = platforms.create(220,320, 'lupa');
        ground.body.immovable= true;
        ground.scale.x=.2;

        ground = platforms.create(220,380, 'lupa');
        ground.body.immovable= true;
        ground.scale.x=.2;
        ground = platforms.create(220,440, 'lupa');
        ground.body.immovable= true;
        ground.scale.x=.2;

        ground = platforms.create(220,500, 'lupa');
        ground.body.immovable= true;
        ground.scale.x=.2;

        ground = platforms.create(500,200, 'lupa');
        ground.body.immovable= true;
        ground.scale.x=.2;

        ground = platforms.create(500,260, 'lupa');
        ground.body.immovable= true;
        ground.scale.x=.2;


        ground = platforms.create(500,320, 'lupa');
        ground.body.immovable= true;
        ground.scale.x=.2;

        ground = platforms.create(500,380, 'lupa');
        ground.body.immovable= true;
        ground.scale.x=.2;
        ground = platforms.create(500,440, 'lupa');
        ground.body.immovable= true;
        ground.scale.x=.2;


        ground = platforms.create(500,500, 'lupa');
        ground.body.immovable= true;
        ground.scale.x=.2;

        ground = platforms.create(360,520, 'lupa');
        ground.body.immovable= true;
        ground.scale.x=.2;


        //center enenmy
        ground = platforms.create(340,400, 'lupa');
        ground.body.immovable= true;
        ground.scale.x=.3;

        ground = platforms.create(340,174, 'lupa');
        ground.body.immovable= true;
        ground.scale.x=.3;
   

   

        


    	life = game.add.text();


        scoreBest =game.add.text(0,50,"Best:"+panagGalaw.retrieveBest(),{fill:"red"});
        scoreText = game.add.text(0,10,'Score: 0 ',{fill:"red"});
    	//SCALE
      	
        player.scale.x=.3;
      	player.scale.y=.3;
      	player.body.bounce.y = 0.2;
    	player.body.gravity.y = 500;
        player.body.collideWorldBounds = true;
        enemies= game.add.group();
        enemies.enableBody = true;

  //create enemy
  
  
        var enemy = enemies.create( 20, 142, 'enemy1');
        enemy.scale.x=.3;
        enemy.scale.y=.3;
        game.add.tween(enemy).to({ x: 120  }, 1700, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true); 		
        var enemy = enemies.create( 20, 290, 'enemy2');
        enemy.scale.x=.3;
        enemy.scale.y=.3;
        game.add.tween(enemy).to({ x: 120  }, 1500, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
          
        var enemy = enemies.create( 20, 450, 'enemy3');
        enemy.scale.x=.3;
        enemy.scale.y=.3;
        game.add.tween(enemy).to({ x: 120  }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);


        var enemy = enemies.create( 760, 142, 'enemy4');
        enemy.scale.x=.3;
        enemy.scale.y=.3;
        game.add.tween(enemy).to({ x: 640  }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
 
        var enemy = enemies.create( 760, 290, 'enemy5');
        enemy.scale.x=.3;
        enemy.scale.y=.3;
        game.add.tween(enemy).to({ x: 640  }, 1750, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

        var enemy = enemies.create( 760,450, 'enemy6');
        enemy.scale.x=.3;
        enemy.scale.y=.3;
        game.add.tween(enemy).to({ x: 640  }, 1800, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
         //Create Flags
        flags = game.add.group();
        flags.enableBody = true;
        
        var enemy = enemies.create( 340, 370, 'enemy7');
        enemy.scale.x=.3;
        enemy.scale.y=.3;
        game.add.tween(enemy).to({ x: 430  }, 1600, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

        var enemy = enemies.create( 340, 145, 'enemy8');
        enemy.scale.x=.3;
        enemy.scale.y=.3;
        game.add.tween(enemy).to({ x: 430  }, 1800, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        
        

      
         //Create Flags
        flags = game.add.group();
        flags.enableBody = true;
        
       
       //1
        var flag = flags.create( 20, 133, 'flag');
        flag.scale.x=.4;
        flag.scale.y=.4;
       //2 
        var flag = flags.create( 20, 280, 'flag');
        flag.scale.x=.4;
        flag.scale.y=.4;
        //3
         var flag = flags.create( 20, 440, 'flag');
        flag.scale.x=.4;
        flag.scale.y=.4;
        //4
        var flag = flags.create( 740, 280, 'flag1');
        flag.scale.x=.4;
        flag.scale.y=.4;
        //5
        var flag = flags.create( 740, 133, 'flag1');
        flag.scale.x=.4;
        flag.scale.y=.4;

         var flag = flags.create( 740, 440, 'flag1');
        flag.scale.x=.4;
        flag.scale.y=.4;
        //center
        var flag = flags.create( 380, 145, 'bonus');

        var flag = flags.create( 380, 372, 'bonus');
     

        //  Let gravity do its thing
    

        pause_label = game.add.image(700, 20, 'pause');

        //BUTTONS
    	buttonjump = game.add.button(600, 472, 'buttonjump', null, this, 0, 1, 0, 1);  //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
        buttonjump.fixedToCamera = true;  //our buttons should stay on the same place  
        buttonjump.events.onInputOver.add(function(){jump=true;});
        buttonjump.events.onInputOut.add(function(){jump=false;});
        buttonjump.events.onInputDown.add(function(){jump=true;});
        buttonjump.events.onInputUp.add(function(){jump=false;});
        buttonleft = game.add.button(50, 480, 'buttonhorizontal-left', null, this, 0, 1, 0, 1);
        buttonleft.fixedToCamera = true;
        buttonleft.events.onInputOver.add(function(){left=true;});
        buttonleft.events.onInputOut.add(function(){left=false;});
        buttonleft.events.onInputDown.add(function(){left=true;});
        buttonleft.events.onInputUp.add(function(){left=false;});
        buttonright = game.add.button(180, 480, 'buttonhorizontal-right', null, this, 0, 1, 0, 1);
        buttonright.fixedToCamera = true;
        buttonright.events.onInputOver.add(function(){right=true;});
        buttonright.events.onInputOut.add(function(){right=false;});
        buttonright.events.onInputDown.add(function(){right=true;});
        buttonright.events.onInputUp.add(function(){right=false;});
      

      

        pause_label.fixedToCamera=true;
        pause_label.scale.x=.1;
        pause_label.scale.y=.1;
        pause_label.inputEnabled = true;

        pause_label.events.onInputUp.add(function () {

        
        // When the paus button is pressed, we pause the game
        game.paused = true;

        });
        // Add a input listener that can help us return from being paused
        game.input.onDown.add(panagGalaw.unpause, self);

      
       collect =game.add.audio('collect');
       bgmusic =game.add.audio('bgmusic');
     bgmusic.play().loopFull();
       jumpmusic=game.add.audio('jump');



        player.animations.add('up',[0],15,true);
     	player.animations.add('left',[15,14,13,12,11,10,9,8],15,true);
        player.animations.add('right',[0,1,2,3,4,5,6,7,0],15,true);
        player.animations.add('turn', [4], 20, true);
        cursors = game.input.keyboard.createCursorKeys();
        jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

      

    


},
update:function() {
	   game.physics.arcade.collide(player, platforms);
       game.physics.arcade.collide(flags, platforms);
       game.physics.arcade.overlap(player, flags, panagGalaw.collectFlag, null, this);
       game.physics.arcade.overlap(player, enemies, panagGalaw.killPlayer, null, this);
    	 player.body.velocity.x = 0;
    	if (left && !duck) {
       
        player.body.velocity.x = -150;
        player.animations.play('left');

    }
      else if (right && !duck) {     
      player.body.velocity.x = 150;
      player.animations.play('right');
      }
      else
       {
         //  Stand still
      player.animations.stop(); 
     
       }
      if (jump){ panagGalaw.jump_now(); }  //change to another frame of the spritesheet
       // if (fire){fire_now(); player.loadTexture('mario', 8); }
       

	
    },
}
	
	var panagGalaw = function(){
    "use strict";
    return {
	

	 jump_now:function(){  //jump with small delay
    if (game.time.now > nextJump ){
       player.body.velocity.y = -240;
        nextJump = game.time.now + 1000;
         jumpmusic.play();
    }
    
    },
    unpause:function(event){
        // Only act if paused
        if(game.paused){
            

          
                // Remove the menu and the label
                //menu.destroy();
                // Unpause the game
                game.paused = false;

            }

        },
  collectFlag:function (player, flag) {

    // Removes the star from the screen
     b=b-1;
    
     if(b==0){
     	game.paused=true;
     	 panagGalaw.restart = game.add.button(w/2-100,h/2-50, 'restart', panagGalaw.go, this);
                game.paused=true;

     	}
    flag.kill();
    collect.play();
    score +=100;
    scoreText.text = 'Score: ' + score;
     
    
},

killPlayer:function (player, enemy) {

    // Removes the star from the screen
  
 	if(panagGalaw.retrieveBest()<=score){
                localStorage.setItem("gameStorage",score);
            }
            if(player.kill){
               bgmusic.stop();
                player.kill();
            panagGalaw.restart = game.add.button(w/2-100,h/2-50, 'restart', panagGalaw.go, this);
         		game.paused=true;
     }   else {
            this.reset();
        }
            
               
                    
                 
   },
    retrieveBest:function(){
    return((localStorage.getItem("gameStorage")!=null) || (localStorage.getItem(gameStorage)!=""))? localStorage.getItem("gameStorage"):0;
 } ,   
 go: function(){
         game.state.start("playGame");

         } ,
         reset: function(){
         player = game.add.sprite(400,530,"kid");
     
    

        this.score = 0;
        this.scoreText.text = 'Score: 0';

        enemy.removeAll();
        createenemies();

        this.flag.removeAll();
        this.addflags();
    },
  

 
        
  
}
}();
 