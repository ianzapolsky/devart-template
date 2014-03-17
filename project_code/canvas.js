/**
 * change the html5 canvas with javascript
 */

var painter = function () {
  
  var 
    // variables
    c,   
    ctx,
    d,

    // functions
    getRandomX, getRandomY, checkCross, paint;

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

  /**
   * check if two X coordinates cross a single X coordinate
   */
  checkCross = function (cross, x1, x2) {
    if (x1 <= cross && cross <= x2)
      return true;
    else if (x1 >= cross && cross >= x2)
      return true;
    else
      return false; 
  };

 /**
  * paint on the canvas
  */ 
  paint = function () {

    c   = document.getElementById("canvas");
    ctx = c.getContext("2d");

    var crosses = 0;

    // build and draw array
    var arr = new Array(61);
    for (var i = 0; i < 61; i++) {
      arr[i] = (i*10);
      ctx.moveTo(arr[i], 0);
      ctx.lineTo(arr[i], c.height);
      ctx.stroke();
      console.log(arr[i]);
    }

    var trials = 100;

    for (var i = 0; i < trials; i++) {

      var x1 = getRandomX();
      var y1 = getRandomY();
    
      var valid = false;
      while (valid === false) {
        var r = Math.random()*(2*Math.PI);
        var x2 = x1 + (10*Math.cos(r));
        var y2 = y1 + (10*Math.sin(r));
        if (x2 > c.width || x2 < 0)
          valid = false;
        else if (y2 > c.height || y2 < 0)
          valid = false;
        else
          valid = true;
      }

      for (var j = 0; j < 61; j++) {
        if (checkCross(arr[j], x1, x2)) {
          crosses += 1;
          break;
        }
      }
    
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
        
    }

    console.log(crosses);
    guess = (2*trials)/(crosses);
    console.log(guess);

  };

  return { paint : paint };

}();



        




