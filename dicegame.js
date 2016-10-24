(function diceGame() {

    // Use document.querySelector('...') to find HTML elements
    // The argument into the function is a CSS selector!
    // Any HTML element has an `innerText` property that you can
    // access (or change) for the contents of that element.

    document.querySelector('button').addEventListener('click', function buttonClicked() {

      var dieOne = Math.floor(Math.random()* 6 + 1);
      console.log(dieOne);
      var dieTwo = Math.floor(Math.random()* 6 + 1);
      console.log(dieTwo);
      var dieNumOne = document.querySelector('.dice aside:first-child').innerText;








    });


})();
