

function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BRKQJw1IT/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
    console.log(error);
}