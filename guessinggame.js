// noprotect

var Lick = function(c) {
  var lick = {
  };
  return lick;
};


var tootsiePop = {
  licks: [],
  capacity: 200
};


var game = {
  answer: Math.floor(Math.random() * tootsiePop.capacity),
  allowedGuesses: 15,
  lowGuesses: [0],
  highGuesses: [tootsiePop.capacity],
  guesses: [],
  
  printguesses: function() {
    $("#guesses").html("Guesses: " + this.guesses.toString());
     
  },
  
  
  init: function() {
    var gameObject = this;
    while(tootsiePop.licks.length < this.answer) {
      tootsiePop.licks.push(new Lick());
    }
    console.log(
            tootsiePop.licks.length + "licks");
    
    $("#game-input").on("submit", function() {
      var message;
      var guess = parseInt($("#guess").val(), 10);
      var diff = gameObject.answer - guess;
      gameObject.allowedGuesses--;
      gameObject.guesses.push(guess);
      
      if (diff > 0) {
        message = "Too low!";
        gameObject.lowGuesses.push(guess);
      } else if (diff < 0) {
        message = "Too high!";
        gameObject.highGuesses.push(guess);
      } else {
        message = "Good Guess! You win!";
      }
      
      $("#result").html(message);
      
      gameObject.hint();
      gameObject.printguesses();
      
      return false;
    });
  },
  
  hint: function() {
    $("#hint").html("Hint: " +
            (this.lowGuesses[this.lowGuesses.length - 1] +
               this.highGuesses[this.highGuesses.length - 1]) / 2
               );
  }
};

game.init();


