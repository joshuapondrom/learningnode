// let type = "WebGL";
// if(!PIXI.utils.isWebGLSupported()){
//     type = "canvas";
// }

// PIXI.utils.sayHello(type);

// let app = new PIXI.Application({width: 256, height: 256});

// document.body.appendChild(app.view);

PIXI.utils.sayHello();

var renderer = PIXI.autoDetectRenderer(512, 512, {
    transparent: true,
    resolution: 1
});
document.getElementById('display').appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader
    .add("images/test.png")
    .load(setup);

var test;

function setup() {
    test = new PIXI.Sprite(
        PIXI.loader.resources["images/test.png"].texture
    );

    stage.addChild(test);
    renderer.render(stage);
}