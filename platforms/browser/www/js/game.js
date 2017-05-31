var w = 800, h = 600
var game;
var player;
var enemy;
var tween;
var changeMethod;
var left=false;
var right=false;
var up=false;
var down=false;
var stop=false;
var duck= false;
var method = 0;
var nextJump = 0;
var jump=false;
var pausetext;
var ground;
var _paused;
var score = 0;
var scoreText;
var flags;
var flag;
var i=0;
var startButton;
var titlepage;
var  enemy;
var enemies
var jumpButton;
var jumpTimer = 0;
var b=8;
var gameStorage;
var game = new Phaser.Game(w, h, Phaser.CANVAS, '');
var startGame;
var go;
game.state.add('bootGame', bootGame);
game.state.add('preloadGame', preloadGame);
game.state.add('menuGame', menuGame);
game.state.add('playGame', playGame);

game.state.add('game_over', Game_Over);

game.state.start("bootGame");