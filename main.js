function ohmaheardedearwadupbear(){

navigator.mediaDevices.getUserMedia({audio: true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/nT1IC8GRX/model.json", modelLoaded);

}

function modelLoaded(){
classifier.classify(gotResults);

}

function gotResults(){
console.log("poop server V2");

}

