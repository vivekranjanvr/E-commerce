const menuBtn=document.getElementById("menu-btn1");
const menu=document.querySelector(".menu-bar");
const closebtn=document.getElementById("Close-btn");
const body=document.getElementsByTagName("BODY")[0];
menuBtn.addEventListener("click",function(){
    menu.classList.toggle("menu-content");
    
});
closebtn.addEventListener("click",function(){
    menu.classList.remove("menu-content");
});
          
const logoBtn=document.getElementById("logo-btn");
logoBtn.addEventListener("click",function(){
    console.log("locat")
    location.reload(true);
});
let flag =0;
slideshow(flag)
function slideshow( num){
    let slides=document.getElementsByClassName('slider');
   //console.log(slides);
   slides[num].style.display="block";

}
//Event 
var slides=document.querySelector(".slider-items").children;
var nextBtn=document.getElementById("forward-btn");
var PrevBtn=document.getElementById("backward-btn");
 var totalSlides =slides.length;
 let index=0;
nextBtn.addEventListener("click",function(){
 next("next");
});

function next(direction){
    if(direction=="next"){
        index++;
        if(index==totalSlides){
            index=0;
        }
    }
    /*
    else{
        if(index==0)
        {
            index=totalSlides-1;

        }
        
        else{
            index--;
        }
    }*/

   
    for(i=0;i<slides.length;i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add('active');
}
PrevBtn.addEventListener("click",function(){
    prev("prev");
   
   });
    function prev(direction)
    {
        //console.log("bb")
        if(direction=="prev"){
            index--;
            if(index==0){
                index=totalSlides-1;
            }
        }
        for(i=slides.length-1;i>=0;i--){
            slides[i].classList.remove("active");
        }
        slides[index].classList.add('active');
    
       //slides[index].classList.add('active');
    }
    //Deals of Days timing 
    /*
    let timmer=document.getElementById("Deals-left-timing");
    var x = setInterval(function() 
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    var distance = countDownDate - now;
    timmer.innerHTML=setTimeout;*/
    // Set the date we're counting down to
var countDownDate = new Date("Jan 31, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("Deals-left-timing").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Deals-left-timing").innerHTML = "EXPIRED";
  }
}, 1000);
//Login Hove 
const loginBtn=document.getElementById("login-btn");
var loginMenu=document.querySelector(".login-menu");
var loginSpan=document.querySelector(".login-span");
loginBtn.onmouseover =function(){
    loginMenu.style.display="block";
    loginSpan.style.display="block";
}
loginBtn.onmouseout =function(){
    loginMenu.style.display="none";
    loginSpan.style.display="none";
}

    //loginSpan.style.display="none";