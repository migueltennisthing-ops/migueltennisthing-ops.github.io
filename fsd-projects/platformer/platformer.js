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
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(100, 722, 200, 20);
    createPlatform(100, 400, 13, 200);
    createPlatform(100, 50, 13, 200);
    createPlatform(300, 400, 13, 200);
    createPlatform(300, 200, 13, 200);
    createPlatform(100, 200, 13, 200);
    createPlatform(300, 600, 13, 145);
    createPlatform(285, 600, 15, 20);
    createPlatform(113, 460, 15, 20);
    createPlatform(285, 350, 15, 20);
    createPlatform(113, 250, 15, 20);
    createPlatform(300, 200, 100, 20);
    createPlatform(400, 200, 100, 20);
    createPlatform(500, 300, 200, 20);
    createPlatform(700, 300, 200, 20);
    createPlatform(900, 200, 200, 20);
    createPlatform(1200, 150, 200, 20);
    createPlatform(400, 570, 180, 20);
    createPlatform(285, 600, 15, 20);
    createPlatform(600, 650, 45, 20);

    // TODO 3 - Create Collectables
    createCollectable("diamond", 1350, 100);
    createCollectable("steve", 500, 530);
    createCollectable("steve", 1100, 400);
    // TODO 4 - Create Cannons
    createCannon("right", 650, 2500);
    createCannon("right", 500, 2000);
    createCannon("right", 350, 2500);
    createCannon("right", 272, 2000);
    createCannon("bottom", 900, 2000);
    createCannon("bottom", 1000, 2000);
    createCannon("right", 800, 2500);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
