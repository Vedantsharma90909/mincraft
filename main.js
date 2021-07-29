var canvas = new fabric.Canvas("myCanvas");
var block_image_width = 30;
var block_image_height = 30;
var player_x = 10;
var player_y = 10;
var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);

    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypress = e.keyCode;
    if (keypress == '38') {
        Up();
        console.log("Up");
    }
    if (keypress == '40') {
        Down();
        console.log("Down");
    }
    if (keypress == '37') {
        Left();
        console.log("Left");
    }
    if (keypress == '39') {
        Right();
        console.log("Right");
    }
    if(e.shiftKey==true && keypress=='80'){
        console.log("p and shift are pressed together");
        block_image_height=block_image_height+10;
        block_image_width=block_image_width+10;
        document.getElementById("current_height").innerHTML=block_image_height;
        document.getElementById("current_width").innerHTML=block_image_width;
    }
    if(e.shiftKey==true && keypress=='77'){
        console.log("m and shift are pressed together");
        block_image_height=block_image_height-10;
        block_image_width=block_image_width-10;
        document.getElementById("current_height").innerHTML=block_image_height;
        document.getElementById("current_width").innerHTML=block_image_width;
    }
    if (keypress=='87'){
        new_image("wall.jpg");
        console.log("w"); 

    }
    if (keypress=='71'){
        new_image("ground.png");
        console.log("g");  
    }
    if (keypress=='76'){
        new_image("light_green.png");
        console.log("l"); 
        
    }
    if (keypress=='84'){
        new_image("trunk.jpg");
        console.log("t"); 
        
    }
    if (keypress=='82'){
        new_image("roof.jpg");
        console.log("r"); 
        
    }
    if (keypress=='89'){
        new_image("yellow_wall.png");
        console.log("y"); 
        
    }
    if (keypress=='68'){
        new_image("dark_green.png");
        console.log("d"); 
        
    }
    if (keypress=='67'){
        new_image("cloud.jpg");
        console.log("c"); 
        
    }
    
}
function Up(){
    if (player_y>=0){
        player_y=player_y-block_image_height;
        console.log(player_y);
        console.log(player_x);
        canvas.remove(player_object);
        player_update();
    }
}
function Down(){
    if (player_y<500){
        player_y=player_y+block_image_height;
        console.log(player_y);
        console.log(player_x);
        canvas.remove(player_object);
        player_update();
    }
}
function Left(){
    if (player_x>=0){
        player_x=player_x-block_image_height;
        console.log(player_x);
        console.log(player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function Right(){
    if (player_x<925){
        player_x=player_x+block_image_height;
        console.log(player_x);
        console.log(player_y);
        canvas.remove(player_object);
        player_update();
    }
}