/**
 * change the html5 canvas with javascript
 */

var painter = function () {
  
  var 
    // variables
    c,   
    ctx,

    // functions
    getRandomX, getRandomY, paint;

  /**
   * return random X and Y coordinates from 0 to the width/height of the
   * canvas
   */
  getRandomX = function () {
    return Math.floor((Math.random()*(c.width+1)));
  };
  
  getRandomY = function () {
    return Math.floor((Math.random()*(c.height+1)));
  };

  // draw three lines to and from random points

 /**
  * paint on the canvas
  */ 
  paint = function () {

    c   = document.getElementById("canvas");
    ctx = c.getContext("2d");
    
    for (var i = 0; i < 50; i++) {
      ctx.moveTo(getRandomX(), getRandomY());
      ctx.lineTo(getRandomX(), getRandomY());
      ctx.stroke();
    }

  };

  return { paint : paint };

}();



        




