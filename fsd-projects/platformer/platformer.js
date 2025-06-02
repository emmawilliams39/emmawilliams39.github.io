$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(150, 680, 150, 15, "thistle");
    createPlatform(350, 630, 150, 15, "thistle");
    createPlatform(550, 600, 150, 15, "thistle");
    createPlatform(790, 540, 150, 15, "thistle");
    createPlatform(1020, 500, 150, 15, "thistle");
    createPlatform(1220, 400, 150, 15, "thistle");
    createPlatform(940, 320, 150, 15, "thistle");
    createPlatform(750, 260, 150, 15, "thistle");
    createPlatform(550, 180, 150, 15, "thistle");
    createPlatform(1250, 250, 100, 15, "thistle");

    // TODO 3 - Create Collectables
    createCollectable("flower", 1280, 340);
    createCollectable("flower", 1280, 170);
    createCollectable("flower", 610, 530);
    createCollectable("flower", 605, 100);
    
    // TODO 4 - Create Cannons
    createCannon("top", 400, 3000)
    createCannon("left", 400, 3000)
    createCannon("top", 1100, 3000)
    createCannon("right", 250, 3000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
