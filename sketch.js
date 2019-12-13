function setup() {
  createCanvas(1679, 905);
  background(255);
}

function draw() {
  strokeWeight(0.0);
  stroke(0);
  {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
      function mouseDragged () {
    strokeWeight(random(5, 1), 255);
    stroke(random (25, 0), 255);
    strokeCap(ROUND);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

function s() {
    save('The Word is LOVE.jpg');
}