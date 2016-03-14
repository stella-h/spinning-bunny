var stage = new PIXI.Stage(0x66FF99);
var renderer = new PIXI.autoDetectRenderer(400,300);
//check for webGL support, otherwise canvas

document.body.appendChild(renderer.view);

requestAnimFrame( animate );

var texture = PIXI.Texture.fromImage("bunny.png");  //texture from image path
var bunny = new PIXI.Sprite(texture);

// anchor point for sprite
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

bunny.position.x = 190;
bunny.position.y = 150;

stage.addChild(bunny);

function animate(){
  requestAnimFrame( animate );
  bunny.rotation += 0.1;
  renderer.render(stage);
}