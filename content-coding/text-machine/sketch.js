var osc1
var notesG = [55, 57, 59, 60, 62, 64, 66, 67];
var notesA = [57, 59, 61, 62, 64, 66, 68, 69];
var notesB = [59, 61, 63, 64, 66, 68, 70, 71];
var notesC = [60, 62, 64, 65, 67, 69, 71, 72];
var notesD = [62, 64, 66, 67, 69, 61, 63, 64];
var notesE = [64, 66, 68, 69, 71, 73, 75, 76];
var notesF = [65, 67, 69, 70, 72, 74, 76, 77];
var step = 0;

var bee; // this is our text
var thefont; //this is my font

var startLetter;
var backgroundRed;
var backgroundGreen;
var backgroundBlue;

function preload() {
	bee = loadStrings('./data/beemoviecooked.txt');
	console.log(bee);
	thefont = loadFont('./data/Steinerlight.otf');
	backgroundRed = random(0, 130);
	backgroundGreen = random(0, 130);
	backgroundBlue = random(0, 130);
} 

function setup() {
  createCanvas(800, 600);
  background(backgroundRed, backgroundGreen, backgroundBlue);
  fill(255);
  textFont(thefont);
  textSize(25);
  text("This is will generate a random word from 'The Bee Movie'", 20, height/2)
  text("Please press ENTER", 20, height*3/4)
   
  osc1 = new p5.Oscillator();
  osc1.setType('square');
  osc1.freq(240);
  osc1.amp(0);
  osc1.start();
  
  bees = bee.toString();
  beesArray = bees.split(" ");
 
}

function draw() {
if((startLetter == 'a') || (startLetter == 'h') || (startLetter == 'o') || (startLetter == 'v')) {
	osc1.amp(0.3); 
	osc1.freq(midiToFreq(notesA[step]));

	if(frameCount % 20 == 0) step = (step + 1) % notesA.length;
}	
if((startLetter == 'b') || (startLetter == 'i') || (startLetter == 'p') || (startLetter == 'w')) {
	osc1.amp(0.3);
	osc1.freq(midiToFreq(notesB[step]));
	
	if(frameCount % 20 == 0) step = (step + 1) % notesB.length;
}
if((startLetter == 'd') || (startLetter == 'k') || (startLetter == 'r') || (startLetter == 'y')) {
	osc1.amp(0.3);
	osc1.freq(midiToFreq(notesD[step]));
	
	if(frameCount % 20 == 0) step = (step + 1) % notesD.length;
}
if((startLetter == 'e') || (startLetter == 'l') || (startLetter == 's') || (startLetter == 'z')) {
	osc1.amp(0.3);
	osc1.freq(midiToFreq(notesE[step]));
	
	if(frameCount % 20 == 0) step = (step + 1) % notesE.length;
}
if((startLetter == 'f') || (startLetter == 'm') || (startLetter == 't')) {
	osc1.amp(0.3);
	osc1.freq(midiToFreq(notesF[step]));
	
	if(frameCount % 20 == 0) step = (step + 1) % notesF.length;
}
if((startLetter == 'g') || (startLetter == 'n') || (startLetter == 'u')) {
	osc1.amp(0.3);
	osc1.freq(midiToFreq(notesG[step]));
	
	if(frameCount % 20 == 0) step = (step + 1) % notesG.length;
}
if((startLetter == 'c') || (startLetter == 'j') || (startLetter == 'q') || (startLetter == 'x')) {
	osc1.amp(0.3);
	osc1.freq(midiToFreq(notesC[step]));
	
	if(frameCount % 20 == 0) step = (step + 1) % notesC.length;
}  
}

function keyPressed() {
	  randomWord(beesArray)
	  backgroundRed(0, 130);
	  backgroundGreen(0, 130);
	  backgroundBlue(0, 130);
}

function randomWord(bees)
{
	length = bees.length
	randomI = random(0, length)
	randI = floor(randomI);
	var rw = bees[randI]
	background(backgroundRed, backgroundGreen, backgroundBlue);
	textSize(48);
	text(rw, 20, height/2);
	createKey(rw)
}

function createKey(word) {
	step = 0;
startLetter = word[0];

}