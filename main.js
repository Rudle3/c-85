function add( {
    canvas=document.getElementById('myCanvas');
    ctx=canvas.getcontext("2d");
    rover_width=100;

    rover_height=90;
    rover_x=10;
    rover_y=10;
    bg_img="mars.jpg";
    rover_img=rover.png;

})
function add(){
    bg_imageTag=new Image ();
    bg_imageTag.onload=uploadBg;
    bg_imageTag.src = bg_img;

    rover_imageTag = new Image();
    rover_imageTag.onload=uploadRover;
    rover_imageTag.src=rover_img

}
function uploadBackground (){
ctx.darwImage(background_imgTag,0,0,canvas.width,canvas.heigth);
}
function uploadrover (){
    ctx.darwImage(rover_imgTag,rover_x,rover_y,rover.width,rover.heigth);
    }
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38')
{
    up();
    console.log("up");

}

    if(keyPressed=='40')
{
    up();
    console.log("down");
}
if(keyPressed=='37')
{
    up();
    console.log("left");
}
if(keyPressed=='39')
{
    up();
    console.log("right");
}
function up(){
if rover_y >=0}
{
    rover_y = rover_y-10;
    console.log("When up arrow is pressed, x=" +rover_x +"| y="+rover_y);
    uploadBackground();
    uploadrover();
    ctx.darwImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height)
}   

function up(){
    if rover_y <=500}
    {
        rover_y = rover_y+10;
        console.log("When up arrow is pressed, x=" +rover_x +"| y="+rover_y);
        uploadBackground();
        uploadrover();
        ctx.darwImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height)
    }   
    function left(){
        if rover_y >=0}
        {
            rover_y = rover_x-10;
            console.log("When up arrow is pressed, x=" +rover_x +"| y="+rover_y);
            uploadBackground();
            uploadrover();
            ctx.darwImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height)
        }   
        function right(){
            if rover_y <=700}
            {
                rover_y = rover_x+10;
                console.log("When up arrow is pressed, x=" +rover_x +"| y="+rover_y);
                uploadBackground();
                uploadrover();
                ctx.darwImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);
            }   
            nasa_mars_img_array=["nasa img1.jpg, nasas img2.jpg, nasa img3.jpg, nasa img4.jpg"];
            random_no=Math.floor(Math.random()*4);
            background_img=nasa_mars_img_array[random_no];
            console.log("background_img="+background_img);

}

