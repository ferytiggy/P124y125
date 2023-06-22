noseX=0
noseY=0
difference=0
rightWristX=0
leftWristX=0

function setup(){
    video=createCapture(VIDEO);
    video.size(400,400);
    canvas=createCanvas(400,400);
    canvas.position(480,480);
    posenet=ml5.poseNet(video, loaded);
    posenet.on("pose", coordenadas);
}

function loaded(){
    console.log("posenet cargado :D");
}


function coordenadas(results){

    if (results.length>0) {


        console.log(results);

            
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;


        console.log("noseX = " + noseX +" noseY = " + noseY);
    

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;


        difference = floor(leftWristX - rightWristX);
    

        console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}


function draw() {
    background('#f0e91a');


      document.getElementById("ancho_y_alto").innerHTML = "El ancho y alto del cuadrado será = " + difference +"px";
    
      fill('#25b3b8');

      stroke('#25b84c');

      square(noseX, noseY, difference);
    }
    