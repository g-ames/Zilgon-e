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
let mode = "intro";
function tick() {
    let frameTime = +(new Date());
    let deltatime = frameTime - lastFrameTime;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    switch(mode) {
        case "intro":

            break;
        default:
            ctx.font = "48px serif";
            ctx.fillStyle = "white";
            ctx.fillText("g engine no state", 80, 80, canvas.width);
            break;
    } 

    lastFrameTime = frameTime;
    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);