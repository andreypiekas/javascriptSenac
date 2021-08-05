//Tamanho da tela
const comprimentoTela = 600;
const alturaTela = 400; 


//Posicao da bolinha
let xBolinha = comprimentoTela/2;
let yBolinha = alturaTela/2;

//Velocidade da bolinha
const velocidadeBolinha = 3;
let velocidadeBolinhaX = velocidadeBolinha;
let velocidadeBolinhaY = velocidadeBolinha;


//Dimensões da Bolinha
const diametro = 20;
const raio = diametro/2;


//Tamanho das raquetes
const comprimentoRaquete = 10;
const alturaRaquete = 100;


//Posição das raquetes
let xRaquete1 = 0;
let xRaquete2 = comprimentoTela-comprimentoRaquete;
let yRaquete1 = alturaTela/2-alturaRaquete/2;
let yRaquete2 = alturaTela/2-alturaRaquete/2;

//Velocidade das raquetes
const velocidadeRaquetes = 4;

//Variavel detectar colisao raquetes
let colidiuRaqueteBolinha = false;
let posX = xBolinha;
let posY = yBolinha;


function setup() {
  createCanvas(comprimentoTela, alturaTela);
}


function draw() { //porta de entrada do programa
  background(127); 
  mostraBolinha();
  mostraRaquetes(xRaquete1, yRaquete1);  // Mostrar a raquete1
  mostraRaquetes(xRaquete2, yRaquete2);  // Mostrar a raquete2
  movimentaBolinha();
  colidirBordas();
  movimentaRaquete1();
  movimentaRaquete2();
  text(yRaquete1, 300,200);
  
}
  
function colidirRaquete1(){
  
  if(colidiuRaqueteBolinha == true){
  //colideRectCircle (posX do retangulo, posY do retangulo, alturado retangulo, comprimentodoRetangulo, posX bolinha, posYbolinha, raio da bolinha)
  colidiuRaqueteBolinha = collideRectCircle(xRaquete1, yRaquete1, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  }
}
  

function colidirRaquete2(){
  //colideRectCircle (posX do retangulo, posY do retangulo, alturado retangulo, comprimentodoRetangulo, posX bolinha, posYbolinha, raio da bolinha)
  colidiuRaqueteBolinha = collideRectCircle(xRaquete2, yRaquete2, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);

  
}

function mudaDirecaoY(){
  velocidadeBolinhaY *=-1;
  
}

/*
function mudaDirecaoX(){
  velocidadeBolinhaX *=-1;
}

*/

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
  
}

function mostraRaquetes(posX, posY){
  rect(posX, posY, comprimentoRaquete, alturaRaquete);
 // rect(comprimentoTela-comprimentoRaquete, yRaquetes, comprimentoRaquete, alturaRaquete); 
  
}

function movimentaBolinha(){
  xBolinha += velocidadeBolinhaX;
  yBolinha += velocidadeBolinhaY;  
  
}

function colidirBordas(){
  if((xBolinha >= comprimentoTela) || (xBolinha <=0)){
    velocidadeBolinhaX *=-1;
  }
  if ((yBolinha >= alturaTela) || (yBolinha <=0)){
    velocidadeBolinhaY *=-1;
    
  }
  
function colidirRaquete(){
  
}


  
}


function movimentaRaquete1(){
  if((keyIsDown(87)) && (yRaquete1 >0)){ // 87 codigo da tecla W - http://keycode.info
    yRaquete1 -= velocidadeRaquetes;

  }
  if((keyIsDown(83)) && (yRaquete1 < alturaTela - alturaRaquete)){ // 83 codigo da tecla S - http://keycode.info
  yRaquete1 += velocidadeRaquetes;

  }
    
}

function movimentaRaquete2(){
  if((keyIsDown(38)) && (yRaquete2 >0)){ // 38 codigo da tecla Up - http://keycode.info
  yRaquete2 -= velocidadeRaquetes;

  }
  if((keyIsDown(40)) && (yRaquete2 < alturaTela - alturaRaquete)){ // 40 codigo da tecla Down - http://keycode.info
  yRaquete2 += velocidadeRaquetes;

  }

}

