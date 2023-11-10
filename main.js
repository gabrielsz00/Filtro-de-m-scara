noseX=0;
noseY=0;
posx = 250
posy = 302
tamanhomascara= 430
imagemdamascara = 'https://i.postimg.cc/dtLPGDSg/escolha.png'


function preload() {
  clownNose = loadImage(imagemdamascara);
}

function ocultar(){
  imagemdamascara = 'https://i.postimg.cc/mkyLhSBv/ocultar.png'
  preload()
  document.getElementById("show").innerHTML = "Máscara selecionada: "
}

function chorandoderir(){
  imagemdamascara = 'https://i.postimg.cc/GhYT33xn/chorandoderir.png'
  preload()
  document.getElementById("show").innerHTML = "Máscara selecionada: Chorando de rir"
}

function chorando(){
  imagemdamascara = 'https://i.postimg.cc/cHDSR37t/chorando.png'
  preload()
  document.getElementById("show").innerHTML = "Máscara selecionada: Chorando"
}

function feliz(){
  imagemdamascara = 'https://i.postimg.cc/5tB9Cjk8/feliz.png'
  preload()
  document.getElementById("show").innerHTML = "Máscara selecionada: Feliz"
}

function raiva(){
  imagemdamascara = 'https://i.postimg.cc/Qdbh8vBq/raiva.png'
  preload()
  document.getElementById("show").innerHTML = "Máscara selecionada: Raiva"
}
function mario(){
  imagemdamascara = 'https://i.postimg.cc/QNbXr0CD/mario.png'
  preload()
  document.getElementById("show").innerHTML = "Máscara selecionada: Mário"
}

function steve(){
  imagemdamascara = 'https://i.postimg.cc/7Y1DNXvd/steve.png'
  preload()
  document.getElementById("show").innerHTML = "Máscara selecionada: Steve"
}

function roblox(){
  imagemdamascara = 'https://i.postimg.cc/kX8X3d2p/roblox.png'
  preload()
  document.getElementById("show").innerHTML = "Máscara selecionada: Roblox"
}

function mudartamanho(){
  posx = document.getElementById("inputx").value
  posy = document.getElementById("inputy").value
  tamanhomascara = document.getElementById("tamanho").value
}
function resetar(){
document.getElementById("inputx").value = 250
document.getElementById("inputy").value = 302
document.getElementById("tamanho").value = 430
mudartamanho()
}



function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet foi inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-posx;
    noseY = results[0].pose.nose.y-posy;
  }
}

function draw() {
  image(video, 0, 0, 500, 500);
  image(clownNose, noseX, noseY, tamanhomascara, tamanhomascara);
}

function takeSnapshot(){    
  save('myFilterImage.png');
}
