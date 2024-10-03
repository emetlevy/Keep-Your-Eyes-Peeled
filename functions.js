let catHead;
let catHeadBlink;
let Face; 
counter=0;

function preload(){
  img= loadImage("catHead.png");
  catHead= loadImage("catHead.png");
  catHeadBlink= loadImage("Blink.png");
}

function setup(){ createCanvas(3000,3000);
  }
    

 
    function draw(){
     
    fill("black")
    background('white');
    if(mouseX>450 && mouseX<530 && mouseY>250 && mouseY<400){
      
      ellipse(mouseX,mouseY,50,100);
      ellipse(mouseX+200,mouseY,50,100);
  
    }
    else if(mouseX<=450 && mouseY>250 && mouseY<400){
      ellipse(450,mouseY,50,100);
  ellipse(450+200,mouseY,50,100);
  
    }
    else if(mouseX>=530 && mouseY>250 && mouseY<400){
      ellipse(530,mouseY,50,100);
  ellipse(530+200,mouseY,50,100);
    }

    else if(mouseY<250 && mouseX>450 && mouseX<530 ){
      ellipse(mouseX,250,50,100);
    ellipse(mouseX+200,250,50,100);
    }
   

    else if(mouseY>400 && mouseX>450 && mouseX<530 ){
      ellipse(mouseX,400,50,100);
  ellipse(mouseX+200,400,50,100);
    }

//Corners 
    else if (mouseX>530 && mouseY>400){
      ellipse(530,400,50,100);
      ellipse(530+200,400,50,100);
    }
    else if (mouseX>530 &&  mouseY<250){
      ellipse(530,250,50,100);
      ellipse(530+200,250,50,100);
    }
    else if (mouseX<450 &&  mouseY>400){
      ellipse(450,400,50,100);
      ellipse(450+200,400,50,100);
    }
    else if (mouseX<450 &&  mouseY<250){
      ellipse(450,250,50,100);
      ellipse(450+200,250,50,100);
 
    }
      image(img, 0, 0);
  
  }
 
  function mousePressed() {
    img= catHeadBlink
  }
  
  function mouseReleased() {
    img=catHead
   
  }


       