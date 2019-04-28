function eteindre(){
    var bouton = document.getElementById("btSwitch");
    var image = document.getElementById("myImage");
    if (bouton.innerHTML=="Eteindre"){
        bouton.innerHTML="Allumer";
        image.src="off.png";
    }
    else {
        bouton.innerHTML="Eteindre";
        image.src="on.png";
    }


}

document.addEventListener("DOMContentLoaded",function(event){
    console.log("DOM loaded");
    var btSwitch = document.getElementById("btSwitch");
    btSwitch.addEventListener("click",eteindre);
});
