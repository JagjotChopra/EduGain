startSlide();
function show(){
    var nm=document.getElementsByClassName("navitems");
     nm[0].style.right="0%";
}
function closed(){
    var nm=document.getElementsByClassName("navitems");
     nm[0].style.right="-50%";
}


var sliders=document.querySelector(".sliders");
var c=document.getElementById("main-container");

var slider=document.querySelectorAll(".slider");
let index=1;
const firstClone=slider[0].cloneNode(true);
const lastClone=slider[slider.length-1].cloneNode(true);

firstClone.id="first-clone";
lastClone.id="last-clone";

sliders.append(firstClone);
sliders.prepend(lastClone);

const slideWidth=slider[index].clientWidth;
// console.log(slideWidth);
sliders.style.transform=`translateX(${-slideWidth * index}px)`
var ti;

 function startSlide()
{
    ti=setInterval(()=>{
   next();
},5000);
}    

sliders.addEventListener('transitionend',()=>{
    var slider=document.querySelectorAll(".slider");
    if(slider[index].id=== firstClone.id){
        sliders.style.transition='none';
        index=1;
        sliders.style.transform=`translateX(${-slideWidth * index}px)`
    }
    if(slider[index].id=== lastClone.id){
        sliders.style.transition='none';
        index=slider.length-2;
        sliders.style.transform=`translateX(${-slideWidth * index}px)`
    }
})

c.addEventListener('mouseenter',()=>{
    clearInterval(ti);
})

c.addEventListener('mouseleave',()=>{
    startSlide();
})

function next(){
    var slider=document.querySelectorAll(".slider");
    if(index>=slider.length-1) return;
    index++;
    // sliders.style.transform=`translateX(-${100 * index}%)`;
    sliders.style.transform=`translateX(${-slideWidth * index}px)`
    sliders.style.transition='.7s'
}

function back(){
    var slider=document.querySelectorAll(".slider");
    if(index<=0) return;
    index--;
    // sliders.style.transform=`translateX(-${100 * index}%)`;
    sliders.style.transform=`translateX(${-slideWidth * index}px)`
    sliders.style.transition='.7s'
}

// var counter=0;
// slider.forEach((element,index)=>{
//     element.style.left=`${index*100}%`
// });



// var ti;
// function next(){
//     if(counter == slider.length - 1){
//         counter=0;
//     }
//     else{
//         counter++;
//     }
   
//     slider.forEach((element,index)=>{
//     element.style.transform=`translateX(-${counter*100}%)`
//     // element.style.left=`-${counter*100}%`
// });
// console.log(counter);
// clearInterval(ti);
// run();
// }
// function back(){
//     if(counter==0){
//         counter=3;
//     }
//     counter--;
//     slider.forEach((element,index)=>{
//     element.style.transform=`translateX(-${counter*100}%)`
//     // element.style.left=`-${counter*100}%`
// });
// console.log(counter);
// }

// function run()
// {
// ti=setInterval(()=>{
// if(counter == slider.length - 1){
//         counter=0;
//     }
//     else{
//         counter++;
//     }
   
//     slider.forEach((element,index)=>{
//     element.style.transform=`translateX(-${counter*100}%)`
//     // element.style.left=`-${counter*100}%`
// });
// console.log(counter);
// },5000);
// }    
