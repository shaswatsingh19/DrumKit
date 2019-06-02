
/* can also be used as anonymous function like this ===
document.querySelector("button").addEventListener("click", function (){
  alert("button is pressed");
})
*/
var numberOfDrumButton = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButton; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);

  function handleclick()

  {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  }

}

addEventListener("keypress",function(event){

  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  if(key == 'w' || key == 'W')
  {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  else if(key == 'a' || key == 'A'){
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();

  }
  else if(key == 's' || key == 'S'){
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  else if(key == 'd' || key == 'D'){

    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
  else if(key == 'j' || key == 'J'){
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
  else if(key== 'k' || key == 'K'){
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
  else if(key == 'l' || key == 'L'){
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
  else{
     alert("you pressed the wrong key  " + key )
  }

}

function buttonAnimation(currentKey)
{
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){ activeButton.classList.remove("pressed"); }, 1300);
}
/*
var audio = new Audio("sounds/tom-1.mp3");
audio.play();w
var audio = new Audio("sounds/tom-2.mp3");
audio.play();a
var audio = new Audio("sounds/tom-3.mp3");
audio.play();s
var audio = new Audio("sounds/tom-4.mp3");
audio.play();d
var audio = new Audio("sounds/snare.mp3");
audio.play();j
var audio = new Audio("sounds/crash.mp3");
audio.play();k
var audio = new Audio("sounds/kick.mp3");
audio.play();l
*/
