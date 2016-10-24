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

      var dieOne = Math.floor(Math.random()* 6 + 1);
      console.log(dieOne);
      var dieTwo = Math.floor(Math.random()* 6 + 1);
      console.log(dieTwo);
      var score = dieOne + dieTwo;
      console.log(score);

      if ( score === 11 ) {
      var no =  document.querySelector('.result').innerText += 'Try Again';
      }
      // for (var i = 0; )
      else if (score === 7 ) {
      var yes = document.querySelector('.result').innerText += 'You Win!';
      };

      document.querySelector('.dice aside:first-child').innerText = dieOne;
      document.querySelector('.dice aside:last-child').innerText = dieTwo;
      // document.querySelector('.result').innerText = no;


    });


})();
