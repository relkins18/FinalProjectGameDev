preloadGame={
  preload:function() {
      game.load.spritesheet('button', 'img/button.png', 87, 48);
        game.load.image('bg1', 'img/titlepage.png');
        game.load.image("enemy1","img/bot-1.png")
        game.load.image("enemy2","img/bot-2.png");
        game.load.image("enemy3","img/bot-3.png");
        game.load.image("enemy4","img/bot-4.png");
        game.load.image("enemy5","img/bot-5.png");
        game.load.image("enemy6","img/bot-6.png");
        game.load.image("enemy7","img/bot-7.png");
        game.load.image("enemy8","img/bot-8.png");
        game.load.image("bonus","img/bonus.png");
        game.load.image("50points","img/flag50.png")
        game.load.image("flag","img/flag40.png")
        game.load.image("flag1","img/flag40.1.png")
        game.load.image("bg","img/game.png");
        game.load.spritesheet('kid',"img/running3.png",108,140);
        game.load.spritesheet('buttonvertical', 'img/button-vertical.png',64,64);
     	  game.load.spritesheet('buttonhorizontal-left', 'img/button-horizontal-left.png',96,64);
     	  game.load.spritesheet('buttonhorizontal-right', 'img/button-horizontal-right.png',96,64);
        game.load.image('lupa',"img/platform.png");
        game.load.spritesheet('buttonjump', 'img/button-round-b.png',96,96);
        game.load.image('pause','img/pause.png');
        game.load.image('diamond','img/diamond.png');
        game.load.image('restart', 'img/restart.png');
        
        //loading Music
        game.load.audio('bgmusic','audio/musicbg.mp3');
        game.load.audio('jump','audio/jump3.mp3');
        game.load.audio('collect','audio/collect1.mp3');
        game.load.audio('touch','audio/touch.mp3');

  },
  create:function() {
    game.state.start("menuGame");
  },
}