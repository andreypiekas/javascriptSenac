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

//Variaveis Jogadores
let pontosJogador1 = 0;
let pontosJogador2 = 0;

function setup() {
  createCanvas(comprimentoTela, alturaTela);
}

function draw() { //porta de entrada do programa
  background(0); 
  mostraBolinha();
  mostraRaquetes(xRaquete1, yRaquete1);  // Mostrar a raquete1
  mostraRaquetes(xRaquete2, yRaquete2);  // Mostrar a raquete2
  movimentaBolinha();
  colidirBordas();
  movimentaRaquete1();
  movimentaRaquete2();
  colidirRaquete1();
  colidirRaquete2();
  //text(yRaquete1, 300,200);
  mostraPlacar();
  
}
  
function colidirRaquete1(){
    //colideRectCircle (posX do retangulo, posY do retangulo, alturado retangulo, comprimentodoRetangulo, posX bolinha, posYbolinha, raio da bolinha)
  colidiuRaqueteBolinha = collideRectCircle(xRaquete1, yRaquete1, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiuRaqueteBolinha == true){
    velocidadeBolinhaX *=-1;
    //velocidadeBolinhaY *=-1;
  }
}

function colidirRaquete2(){
  //colideRectCircle (posX do retangulo, posY do retangulo, alturado retangulo, comprimentodoRetangulo, posX bolinha, posYbolinha, raio da bolinha)
  colidiuRaqueteBolinha = collideRectCircle(xRaquete2, yRaquete2, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiuRaqueteBolinha == true){
  velocidadeBolinhaX *=-1;
  //velocidadeBolinhaY *=-1;
  }  
}

function mostraPlacar(){
  if (xBolinha > comprimentoTela - 5){
    pontosJogador1 +=1;
  }
  if (xBolinha < 5){
    pontosJogador2 +=1
  }
  fill(255);
  textSize(20);
  text(pontosJogador1, 278, 26);
  text(pontosJogador2, 320, 26);
  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
  
}

function mostraRaquetes(posX, posY){
  rect(posX, posY, comprimentoRaquete, alturaRaquete); 
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
}
// Relacionado as funcoes movimentaRaque1 e movimentaRaquete2, codigos de teclas
// 87 - w | 83 - S | 38 - up | 40 - down *** http://keycode.info
function movimentaRaquete1(){ 
  if((keyIsDown(87)) && (yRaquete1 >0)){ 
    yRaquete1 -= velocidadeRaquetes;
    
  }
  if((keyIsDown(83)) && (yRaquete1 < alturaTela - alturaRaquete)){
  yRaquete1 += velocidadeRaquetes;
    
  } 
}

function movimentaRaquete2(){
  if((keyIsDown(38)) && (yRaquete2 >0)){ 
  yRaquete2 -= velocidadeRaquetes;

  }
  if((keyIsDown(40)) && (yRaquete2 < alturaTela - alturaRaquete)){ 
  yRaquete2 += velocidadeRaquetes;

  }
}
