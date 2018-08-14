var timer;
function getIndex(index) {
    if(index<10)
    {
        return "0"+index;
    }
    else 
    {
        return index;
    }
}
function startAnimation(name,count) {
    clearInterval(timer);
    var index=0;
    timer=setInterval(function () {
       document.getElementById("background").src="img/afternoon/afternoon/Animations/"+name+"/"+ name +"_"+getIndex(index)+".jpg";
       index++;
       if(index>count)
       {
           clearInterval(timer);
       }
    },100)
}

document.getElementById("cymbal").onclick=function(){
    startAnimation("cymbal",12);
}

document.getElementById("drink").onclick=function(){
    startAnimation("drink",80);
}
document.getElementById("eat").onclick=function(){
    startAnimation("eat",39);
}
document.getElementById("fart").onclick=function(){
    startAnimation("fart",27);
}
document.getElementById("pie").onclick=function(){
    startAnimation("pie",23);
}
document.getElementById("scratch").onclick=function(){
    startAnimation("scratch",55);
}
document.getElementById("head").onclick=function(){
    startAnimation("knockout",80);
}
document.getElementById("stomach").onclick=function(){
    startAnimation("stomach",33);
}
document.getElementById("footLeft").onclick=function(){
    startAnimation("footRight",29);
    document.getElementById("music").play();
}
document.getElementById("footRight").onclick=function(){
    startAnimation("footLeft",29);
    document.getElementById("music").play();

}