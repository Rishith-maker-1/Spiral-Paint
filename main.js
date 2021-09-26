canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent = "Empty";
var last_position_of_x,last_position_of_y;
color = "black";
linewidth = 1;
radius = 10;
canvas.addEventListener("mousedown",My_mousedown);
function My_mousedown(e) {
    color = document.getElementById("color").value;
    linewidth = document.getElementById("linewidth").value;
    radius = document.getElementById("radius").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",My_mouseup);
function My_mouseup(e) {
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",My_mouseleave);
function My_mouseleave(e) {
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",My_mousemove);
function My_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linewidth;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
        console.log("last postition of x and y cordinates = ");
        console.log("x = "+last_position_of_x+"y = "+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current postition of x and y cordinates = ");
        console.log("x = "+current_position_of_mouse_x+"y = "+current_position_of_mouse_y);
        
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
function cleararea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
