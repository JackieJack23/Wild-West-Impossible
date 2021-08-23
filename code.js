var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["93f5b748-6f4b-4f40-ae22-a37f93bbeeae","5bd8145b-2c07-4b62-b5ff-b9332ffdfa11","0280541f-847b-419e-bbfa-e08436209f43","e4f604ac-ffe2-409e-a44a-dabc6d4f41c9"],"propsByKey":{"93f5b748-6f4b-4f40-ae22-a37f93bbeeae":{"name":"cowboy","sourceUrl":"assets/v3/animations/hOd6M4c1-Fr9jPP_-gjoec_AZL6LyseFfzxPlVcty-I/93f5b748-6f4b-4f40-ae22-a37f93bbeeae.png","frameSize":{"x":920,"y":500},"frameCount":1,"looping":true,"frameDelay":4,"version":"4Zy9m7OwQOL_c4HdTu4VmakG40cG4P1U","loadedFromSource":true,"saved":true,"sourceSize":{"x":920,"y":500},"rootRelativePath":"assets/v3/animations/hOd6M4c1-Fr9jPP_-gjoec_AZL6LyseFfzxPlVcty-I/93f5b748-6f4b-4f40-ae22-a37f93bbeeae.png"},"5bd8145b-2c07-4b62-b5ff-b9332ffdfa11":{"name":"cactus","sourceUrl":"assets/api/v1/animation-library/gamelab/3fu.q81V9KPANd4VC7pYMK9s6qNudP6c/category_video_games/cactus.png","frameSize":{"x":117,"y":160},"frameCount":1,"looping":true,"frameDelay":2,"version":"3fu.q81V9KPANd4VC7pYMK9s6qNudP6c","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":117,"y":160},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3fu.q81V9KPANd4VC7pYMK9s6qNudP6c/category_video_games/cactus.png"},"0280541f-847b-419e-bbfa-e08436209f43":{"name":"bison","sourceUrl":"assets/api/v1/animation-library/gamelab/CioXnCYGHcfZoiMW7ZkoD6PP.8HIwg9V/category_animals/bison.png","frameSize":{"x":397,"y":273},"frameCount":1,"looping":true,"frameDelay":2,"version":"CioXnCYGHcfZoiMW7ZkoD6PP.8HIwg9V","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":273},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CioXnCYGHcfZoiMW7ZkoD6PP.8HIwg9V/category_animals/bison.png"},"e4f604ac-ffe2-409e-a44a-dabc6d4f41c9":{"name":"bank","sourceUrl":"assets/api/v1/animation-library/gamelab/CjvVLLlokYZEBz_KBd.S.4ObmTBwIi7d/category_buildings/commercial_12.png","frameSize":{"x":336,"y":247},"frameCount":1,"looping":true,"frameDelay":2,"version":"CjvVLLlokYZEBz_KBd.S.4ObmTBwIi7d","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":336,"y":247},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CjvVLLlokYZEBz_KBd.S.4ObmTBwIi7d/category_buildings/commercial_12.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var cowboy;
var life = 10;
var gold = 0;
var cactus1, cactus2, cactus3, cactus4;

//Create walls
var wall1 = createSprite(70, 150, 5, 400);
wall1.shapeColor = "brown";

var wall2 = createSprite(300, 225, 5, 350);
wall2.shapeColor = "brown";

//create bank
var bank = createSprite(350, 350, 10, 10);
bank.setAnimation("bank");
bank.scale = 0.25;

//Create cactus
cactus1 = createSprite(100,45,10,10);
cactus1.setAnimation("cactus");
cactus1.scale = 0.2;

cactus2 = createSprite(280,140,10,10);
cactus2.setAnimation("bison");
cactus2.scale = 0.1;

cactus3 = createSprite(100,240,10,10);
cactus3.setAnimation("cactus");
cactus3.scale = 0.2;

cactus4 = createSprite(280,330,10,10);
cactus4.setAnimation("bison");
cactus4.scale = 0.1;

//add the velocity to make the cactus move
cactus1.velocityX = 5;
cactus2.velocityX = -8;
cactus3.velocityX = 8;
cactus4.velocityX = -8;

//creates cow boy
cowboy = createSprite(30, 300,13,13);
cowboy.setAnimation("cowboy");
cowboy.scale = 0.07;

function draw(){
  background(rgb(227, 196, 100));
  //score display
  textSize(15);
  text("Lives: " + life,125,20);
  text("Gold: " + gold,200,20);
  strokeWeight(0);
  //cactus bounce off
  cactus1.bounceOff(wall1);
  cactus1.bounceOff(wall2);
  
  cactus2.bounceOff(wall1);
  cactus2.bounceOff(wall2);
  
  cactus3.bounceOff(wall1);
  cactus3.bounceOff(wall2);
  
  cactus4.bounceOff(wall1);
  cactus4.bounceOff(wall2);
  
  if (keyDown(RIGHT_ARROW)) 
  {
    cowboy.velocityX = 3;
  } else cowboy.velocityX = 0;
  
  if (keyDown(LEFT_ARROW)) 
  {
    cowboy.velocityX = -3;
  }
  
  if (keyDown(UP_ARROW)) 
  {
    cowboy.velocityY = -3;
  }else cowboy.velocityY = 0;
  
  if (keyDown(DOWN_ARROW)) 
  {
    cowboy.velocityY = 3;
  }
    
  //touch cactus
  if (cowboy.isTouching(cactus1))
  {
    life -= 1;
    cowboy.x = 30;
    cowboy.y = 300;
  }
  
    if (cowboy.isTouching(cactus2))
  {
    life -= 1;
    cowboy.x = 30;
    cowboy.y = 300;
  }
  
    if (cowboy.isTouching(cactus3))
  {
    life -= 1;
    cowboy.x = 30;
    cowboy.y = 300;
  }
  
    if (cowboy.isTouching(cactus4))
  {
    life -= 1;
    cowboy.x = 30;
    cowboy.y = 300;
  }
  //Bounce Off Walls
  cowboy.bounceOff(wall1);
  cowboy.bounceOff(wall2);
  //touch bank
  if (cowboy.isTouching(bank))
  {
    gold += 1;
    cowboy.x = 30;
    cowboy.y = 300;
  }

  drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
