const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstpageanim(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity:0,
        duration:2,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y: 0,
        ease:Expo.easeInOut,
        duration: 2,
        stagger: .2,
        delay: -1,
    })
    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -.5,
    })
}


// jab mouse move ho to hum log skew kar paaye aur maximum aur minimum skew set kar paaye, jab mouse o=move ho to chapta ki value bade aur jab mouse chalna band ho jaye to chapta hata lo 

function circlechaptakaro(){
  window.addEventListener("mousemove", function(dets){
    

  })
}



function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

circleMouseFollower();
firstpageanim();

