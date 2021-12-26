nosex = 0;
nosey = 0;

function preload() {
clownNose = loadImage('https://i.postimg.cc/Y2RsS05d/clown-nose-clipart-2.png')
}

function setup() {
canvas = createCanvas(300, 300);
canvas.center()
canvas.position(500, 200);
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses, )
}

function draw() {
image(video, 0, 0, 300, 300);
image(clownNose, nosex, nosey, 30, 30);
} 

function take_snapshot() {
save('RealFilterImage.png')
}

function modelLoaded() {
console.log('modelLoaded')
}

function gotPoses(results) {
if(results.length > 0){
console.log(results);
nosex = results[0].pose.nose.x-10;
nosey = results[0].pose.nose.y-10;
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);

}

}