Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:90});

webcam=document.getElementById("webcam");
Webcam.attach('#webcam');
function take_snapshot()
{
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    }); 
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AR5z5qiBw/model.json', modelLoaded);
function modelLoaded()
{
    console.log(modelLoaded);
        
}
function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);   
    synth.speak(utterThis);
    }
function gotResult(error, results) {
    if(error){
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_gesture").innerHTML = results[0].label;
        document.getElementById("result_gesture2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "hello")
        {
            document.getElementById("update_emoji").innerHTML= "&#128077";
        }
        if(results[0].label == "thumbs up")
        {
            document.getElementById("update_emoji").innerHTML= "&#128078";
        }
        if(results[1].label == "thumbs down")
        {
            document.getElementById("update_emoji2").innerHTML= "&#128406";
        }
        if(results[1].label == "star trek")
        {
            document.getElementById("update_emoji2").innerHTML= "&#128400";
        }
        if(results[1].label == "peace")
        {
            document.getElementById("update_emoji2").innerHTML= "&#9996";
        }
    }
}
