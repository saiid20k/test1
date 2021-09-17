// Remove Active Class From List

let activeItem = document.querySelectorAll(".swit li a");

activeItem.forEach((a) => {
   
    a.addEventListener("click", removeActive);

});

function removeActive(){

    activeItem.forEach((a) => {

        a.classList.remove("Active");

        this.classList.add("Active");

    });
}

// 




let toggleBtn = document.getElementById("toggleBtn");

let links = document.getElementById("links");

toggleBtn.onclick = function () {
  
    links.classList.toggle("menu");
    // links.style.display ="none";
};



document.addEventListener("click", (e) => {

    if(e.target !== toggleBtn && e.target !== links){

        if(links.classList.contains("menu")){

            links.classList.toggle("menu");

        }

    } 
});

links.onclick = function (e) {

    e.stopPropagation();

}




// /////////////////////////////////////

let iconDark = document.getElementById("iconDark");

iconDark.onclick = function(){
    
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
    
        iconDark.src = "imgs/sun.png";
    
    }
    
    else{
    
        iconDark.src ="imgs/moon.png"
    
    }
}



///////////////////////////////////////////////


window.addEventListener("scroll", function(){
    
    let Header = document.querySelector("header");
    
    Header.classList.toggle("sticky", window.scrollY > 0);

})

// /////////////////////////////////////////////




// Start Animated Progress bar 

// let ourSkiils = document.querySelector(".skiils");

// window.onscroll = function () {

//     let skiilsOffsetTop = ourSkiils.offsetTop;

//     let skiilsOuterHeight = ourSkiils.offsetHeight;

//     let windowHeight = this.innerHeight;

//     // this.console.log(windowHeight); 

//     let windowScrollTop = this.pageYOffset;

//     if(windowScrollTop > (skiilsOffsetTop + skiilsOuterHeight - windowHeight)) {
   
//         this.console.log('yyyyyyyyyyyyyyyy');

        // let allSkiils = document.querySelectorAll(".all-skiils .skiil .skiil-progress .skiilPar");

        // allSkiils.forEach(skiilPar => {

            // skiilPar.style.width = skiil-par.dataset.progress;

            // skiilPar.style.width = skiilPar.dataset.progress;

        // });
    
//     }

// };


    $('.skiilPar').each(function(){

        var $this = $(this);

        var per = $this.attr('per');

        $this.css("width",per+'%');

        $({animatedValue: 0}).animate({animatedValue: per},{
            duration: 1000,
            step: function(){
                $this.attr('per',Math.floor(this.animatedValue));
            },
            complate: function(){
                $this.attr('per',Math.floor(this.animatedValue) + '%');
            }
        });

    });




// End Animated Progress bar 


let more = document.getElementById("more");

let message = document.getElementById("message");

more.onclick = function(){

    message.innerHTML = "You Can Find More Projects in My Github Account!";

}