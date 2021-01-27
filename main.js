sound = "";
check = 0;
function preload(){
    sound = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(350,350);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,350,350);
}
function play(){
    if(check == 0){
        sound.play();
        check = check+1;
    }
    
}