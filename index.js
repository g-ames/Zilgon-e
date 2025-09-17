// ------------------------
// Setup
// ------------------------
const ctx = canvas.getContext("2d");

function fixCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", fixCanvasSize);
fixCanvasSize();

var mousePosition = {
    x: 0,
    y: 0
};

window.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    mousePosition = {x, y};
});

let initTime = +(new Date());

// ------------------------
// Game
// ------------------------
let lastFrameTime = initTime;
function tick() {
    let frameTime = +(new Date());
    let deltatime = frameTime - lastFrameTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgb(200 0 0)";
    ctx.fillRect(mousePosition.x, mousePosition.y, 50, 50);

    ctx.fillStyle = "rgb(0 0 255)";
    ctx.fillRect(mousePosition.x + Math.sin(), mousePosition.y + 30, 50, 50);
    
    lastFrameTime = frameTime;
    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);