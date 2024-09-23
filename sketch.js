
let pixelSize = 10; // Define the size of the pixel

function setup() {
  createCanvas(750, 600);
  background(228, 224, 220);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(255, 255, 161);

  // pixelation
  push();
  rotate(15);//Changing the direction of rotation
  fill(30, 200, 200);
  pixelatedTriangle(380, -80, 130, 400, 580, 400);//upwards
  fill(65, 65, 65);
  pixelatedRect(240, 230, 80, 50);
  fill(220, 186, 150);
  pixelatedRect(260, 280, 40, 20);
  fill(221, 213, 207);
  pixelatedRect(264, 310, 60, 5);
  pop();

  push();
  rotate(-25);//Changing the direction of rotation
  fill("#E1CF86");
  pixelatedRect(440, -120, 10, 130);
  fill(210, 150, 133);
  pixelatedRect(448, -100, 12, 60);
  pop();

  push();
  rotate(10);//Changing the direction of rotation
  fill(186, 255, 223);
  pixelatedRect(170, 160, 150, 40);
  fill(150, 106, 57);
  pixelatedRect(240, 200, 50, 30);
  fill(119, 66, 50);
  pixelatedRect(260, 200, 120, 8);
  fill(72, 76, 95);
  pixelatedRect(270, 230, 10, 8);
  fill(63, 107, 178);
  pixelatedTriangle(340, 208, 300, 280, 380, 280);
  pop();

  push();
  rotate(-8);//Changing the direction of rotation
  fill(186, 255, 223);
  pixelatedRect(620, 240, 10, 10);
  fill(230, 186, 255);
  pixelatedRect(540, 250, 100, 10);
  fill(255, 186, 250);
  pixelatedRect(450, 260, 200, 80);
  fill(77, 77, 77);
  pixelatedRect(510, 340, 90, 50);
  fill(186, 255, 223);
  pixelatedRect(460, 340, 30, 25);
  pop();

  // Add several new pixelated ellipses
  fill(100, 180, 200); 
  pixelatedEllipse(150, 100, 100, 60); 
  fill(180, 100, 150); 
  pixelatedEllipse(100, 500, 80, 50); 
  fill(255, 200, 100); 
  pixelatedEllipse(580, 450, 120, 70); 
}

// Pixelated Rectangle
function pixelatedRect(x, y, w, h) {
  for (let i = x; i < x + w; i += pixelSize) {
    for (let j = y; j < y + h; j += pixelSize) {
      rect(floor(i / pixelSize) * pixelSize, floor(j / pixelSize) * pixelSize, pixelSize, pixelSize);
    }
  }
}

// Pixelated Triangles
function pixelatedTriangle(x1, y1, x2, y2, x3, y3) {
  let minX = min(x1, x2, x3);
  let maxX = max(x1, x2, x3);
  let minY = min(y1, y2, y3);
  let maxY = max(y1, y2, y3);

  for (let x = minX; x < maxX; x += pixelSize) {
    for (let y = minY; y < maxY; y += pixelSize) {
      let px = floor(x / pixelSize) * pixelSize;
      let py = floor(y / pixelSize) * pixelSize;
      if (isPointInTriangle(px, py, x1, y1, x2, y2, x3, y3)) {
        rect(px, py, pixelSize, pixelSize);
      }
    }
  }
}

  // Pixelated ellipse
function pixelatedEllipse(cx, cy, w, h) {
  for (let x = cx - w / 2; x < cx + w / 2; x += pixelSize) {
    for (let y = cy - h / 2; y < cy + h / 2; y += pixelSize) {
      let px = floor(x / pixelSize) * pixelSize;
      let py = floor(y / pixelSize) * pixelSize;
      if (((px - cx) ** 2) / (w / 2) ** 2 + ((py - cy) ** 2) / (h / 2) ** 2 <= 1) {
        rect(px, py, pixelSize, pixelSize);
      }
    }
  }
}

// Determine if a point is inside a triangle
function isPointInTriangle(px, py, x1, y1, x2, y2, x3, y3) {
  let areaOrig = abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1));
  let area1 = abs((x1 - px) * (y2 - py) - (x2 - px) * (y1 - py));
  let area2 = abs((x2 - px) * (y3 - py) - (x3 - px) * (y2 - py));
  let area3 = abs((x3 - px) * (y1 - py) - (x1 - px) * (y3 - py));
  return areaOrig === area1 + area2 + area3;
}
