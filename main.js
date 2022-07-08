var dog = 0;
var cat = 0;

function start_classification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8h-FECTe7__/model.json', model_ready);
}

function model_ready(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
 if(error){
     console.error(error);
 }
 else{
     console.log(results);
     random_number_r = Math.floor(Math.random()*255) + 1;
     random_number_g = Math.floor(Math.random()*255) + 1;
     random_number_b = Math.floor(Math.random()*255) + 1;

     document.getElementById("detected").innerHTML = "Detected Dog - "+dog+", Detected Cat - "+cat+"";
     document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

     document.getElementById("animal_voices").innerHTML = "Detected Voice is of - " + results[0].label;
     document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

     img = document.getElementById("animal_images");

     if(results[0].label == "Barking"){
        img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif"
        dog = dog + 1;
     }

     else if(results[0].label == "Barking"){
        img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif"
        cat = cat + 1;
     }

     else{
        img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
     }
 }
}