let head = document.getElementById("head");
let x=0;
let y=0;
let l=0;
let r=0;
let u=0;
let d=0;
let eat=0;
let xrand=0;
let yrand=0;
let foodElement=null;
let score = document.querySelector("#score");
let gameContainer = document.getElementById("gameContainer");
window.addEventListener("keydown",move);

food();

//food function____________________________________________________________________________________
function food(){
    xrand = Math.floor(Math.random() * 550);
    yrand = Math.floor(Math.random() * 550);
    foodElement = document.createElement("div");
    foodElement.style.width = "20px" ;
    foodElement.style.height = "20px";
    foodElement.style.backgroundColor = "red";
    foodElement.style.marginLeft = xrand +"px";
    foodElement.style.marginTop = yrand + "px";
    gameContainer.appendChild(foodElement);
}
//___________________________________________________________________________________________________

function eats(){
    if((xrand<=x+15 && xrand>=x-15) && (yrand<=y+15 && yrand>=y-15) ){
        gameContainer.removeChild(foodElement);
        food();
        eat+=1;
        score.textContent = `Score: ${eat}`;
    }
}

//_____________________mouvement function :_____________________________________________________________________
function move(event){
    switch(event.key){
        case "ArrowDown":
            l=0;
            r=0;
            u=0;
            d=1;
            let timer = setInterval(movedown,5);
            function movedown(){
                if(d==0 || y>= 570){
                    clearInterval(timer);
                }else{
                    y+=1;
                    head.style.top = y +"px" ;
                    eats();
                }
            }
            break;
        case "ArrowUp":
            l=0;
            r=0;
            u=1;
            d=0;
            let timer2 = setInterval(moveup,5);
            function moveup(){
                if(u==0 || y<=0){
                    clearInterval(timer2);
                }else{
                    y-=1;
                    head.style.top = y + "px" ;
                    eats();
                }
            }
            break;
        case "ArrowLeft":
            l=1;
            r=0;
            u=0;
            d=0;
            let timer3 = setInterval(moveleft,5);
            function moveleft(){
                if(l==0 || x<=0){
                    clearInterval(timer3);
                }else{
                    x-=1;
                    head.style.left = x + "px" ;
                    eats();
                }
            }
            break;
        case "ArrowRight":
            l=0;
            r=1;
            u=0;
            d=0;
            let timer4 = setInterval(moveright,5);
            function moveright(){
                if(r==0 || x>=570){
                    clearInterval(timer4);
                }else{
                    x+=1;
                    head.style.left = x + "px" ;
                    eats();
                }
            }
            break;

        default:
            window.alert("wrong button");

    }
}
//________________________________________________________________________________________________________________