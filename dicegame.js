(function diceGame() {

    // Use document.querySelector('...') to find HTML elements
    // The argument into the function is a CSS selector!
    // Any HTML element has an `innerText` property that you can
    // access (or change) for the contents of that element.


    document.querySelector('button').addEventListener('click', function buttonClicked() {

    // var x = 13;
    //              |-----------------------------x---------------------------|
      var dieNumOne = document.querySelector('.dice aside:first-child').innerText;
    // x=42;
    //
      var now = new Date();
      var dieOne = Math.floor(Math.random()* 6 + 1);
      var dieTwo = Math.floor(Math.random()* 6 + 1);
      var score = dieOne + dieTwo;


      if ( score === 11 ) {
      document.querySelector('.result').innerText = 'You Win!';
      }
      else if (score === 7 ) {
      document.querySelector('.result').innerText = 'You Win!';
    }

      else if (score === 1,2,3,4,5,6,8,9,10,12) {
        document.querySelector('.result').innerText = 'Try Again';
      };

      document.querySelector('.dice aside:first-child').innerText = dieOne;
      document.querySelector('.dice aside:last-child').innerText = dieTwo;

      // DATE START
      // document.querySelector('.game-start').innerText = 'Game Started' + now.getFullYear() +  (now.getMonth() + 1 ) +  ( now.getDate());
      //

    });


})();
