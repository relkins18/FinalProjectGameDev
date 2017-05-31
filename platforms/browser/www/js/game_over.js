var Game_Over = {

    preload : function() {
      game.load.image('restart', 'img/restart.png');
    },

    create : function() {
         restartButton = game.add.button(game.world.centerX - 50, 380, 'restart', Game_0ver.startGame, this); 

    },

    startGame: function () {

        // Change the state back to Game.
        this.state.start('playGame');

    }

};
