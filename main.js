//https://teachablemachine.withgoogle.com/models/

function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('//https://teachablemachine.withgoogle.com/models/model.json', modelReady);
}

function modelReady(){
    clasifier.classify(gotResults);
}
