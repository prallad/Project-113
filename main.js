function preload(){

}

function setup(){
    canvas= createCanvas(640,480,);

    canvas.position(150,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw(){
    rect(15,15,570,470);
    rect(35,35,530,430);
    rect(55,55,490,390);
    rect(75,75,450,350);
    image(video, 100, 100, 400, 300);
    tint(tint_color);
    
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}