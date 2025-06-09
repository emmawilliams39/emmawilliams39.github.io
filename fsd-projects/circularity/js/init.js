var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');

    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle; // variable to hold a single circle when creating circles / iterating
        var circles = []  // variable to store all circles in an array

        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){ //will draw a circle in the function and add a circle to the array
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2); //draws a circle
            physikz.addRandomVelocity(circle, canvas, 5, 5) // gives it a veloctiy 
            view.addChild(circle); // adds the circle
            circles.push(circle); // adds circl to the circles array
        }


        // TODO 3 : Call the drawCircle() function
       
        // TODO 7 : Use a loop to create multiple circles
        for(var i = 0; i < 100; i++){ // the amount of circles that need to be drawn that are added
            drawCircle(); // the function call that allows teh circles to be drawn
        }



        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
           


            // TODO 5 : Call game.checkCirclePosition() on your circles
          

            // TODO 8 / TODO 9 : Iterate over the array
           for(var i = 0; i < circles.length; i++ ){ // allows all the circles to move and be updated
                physikz.updatePosition(circles[i]) // lets the circle move around the screen
                game.checkCirclePosition(circles[i]) // allows the circles to loop through the other side of the screen if it leaves the frame
           }
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            } 
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if(circle.x > canvas.width ){ // shows the circle coming from the left
                circle.x = 0 // allows the circle to loop through the right
            }
            if(circle.x < 0){ // circle coming from the right
                circle.x = canvas.width // allows the circle to go through the left
            }
            if(circle.y > canvas.height ){ // shows the circle coming from the top
                circle.y = 0 // allows the circle to loop through the bottom
            }
            if(circle.y < 0){ // shows the circle cpoming from the bottom
                circle.y = canvas.height // allows the circle to go through the top
            }

            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
