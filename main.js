function response() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('hhttps://teachablemachine.withgoogle.com/models/f2DEFds_x/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    console.log('got results');
}