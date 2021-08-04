function take_snapshot(){    
  save('myCanvas.png');
}

function setup() {
  canvas = createCanvas(410, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(width, height);
 
  video.hide();
}

function draw() {
  image(video, 0, 0, width, height);
  //use filter() function and pass INVERT as a parameter to get a x-ray like filter
   filter(INVERT);
}
