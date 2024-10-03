let catHead;
let catHeadBlink;
let Face; 
counter=0;

function preload(){
  img= loadImage("catHead.png");
  catHead= loadImage("catHead.png");
  catHeadBlink= loadImage("Blink.png");
}

function setup(){ createCanvas(650,650);
  }
    

 
    function draw(){
      print(mouseY);
      
    fill("black")
    background('white');
    if(mouseX>240 && mouseX<290 && mouseY>130 && mouseY<190){
      
      ellipse(mouseX,mouseY,20,40);
      ellipse(mouseX+100,mouseY,20,40);
   
    }
    else if(mouseX<240 && mouseY>130 && mouseY<190){
      ellipse(240,mouseY,20,40);
  ellipse(240+100,mouseY,20,40);
  
    }
    else if(mouseX>=290 && mouseY>130 && mouseY<190){
      ellipse(290,mouseY,20,40);
  ellipse(290+100,mouseY,20,40);
    }

    else if(mouseY<130 && mouseX>240 && mouseX<290 ){
      ellipse(mouseX,130,20,40);
    ellipse(mouseX+100,130,20,40);
    }
   

    else if(mouseY>190 && mouseX>240 && mouseX<290 ){
      ellipse(mouseX,190,20,40);
  ellipse(mouseX+100,190,20,40);
    }

//Corners 
    else if (mouseX>290 && mouseY>190){
      ellipse(290,190,20,40);
      ellipse(290+100,190,20,40);
    }
    else if (mouseX>290 &&  mouseY<130){
      ellipse(290,130,20,40);
      ellipse(290+100,130,20,40);
    }
    else if (mouseX<240 &&  mouseY>190){
      ellipse(240,190,20,40);
      ellipse(240+100,190,20,40);
    }
    else if (mouseX<240 && mouseY<130){
      ellipse(240,130,20,40);
      ellipse(240+100,130,20,40);
 
    }
      image(img, 0, 0,width, img.height*width/img.width);
  
  }
 
  function mousePressed() {
    img= catHeadBlink
  }
  
  function mouseReleased() {
    img=catHead
   
  }


       
