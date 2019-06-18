// Your code goes here
const destImg = document.querySelector('.content-destination img');

destImg.addEventListener('mouseover', function(event){
    //event.stopPropagation();
    TweenMax.to('.content-destination img', 2,{scale:1.2, ease:Bounce.easeOut});
})
destImg.addEventListener('mouseout', function(event){
    TweenMax.to('.content-destination img', 2,{scale:1,ease:Bounce.easeOut})
})

const headerTop = document.querySelector('header.main-navigation');

document.addEventListener('scroll', function(event){
    TweenMax.to('header.main-navigation', 1, {opacity: '0.6',filter: 'alpha(opacity=60)',borderColor: 'none'})
})

const middleH2 = document.querySelector('.intro h2');
//console.log(middleH2)
middleH2.addEventListener('click',function(event){
    event.target.style.color = 'red';
})

const navig = document.getElementsByClassName('nav-link');

navig[0].addEventListener('focus', function(event){
        event.target.style.color = 'red';
        event.preventDefault(); 
    })

    navig[1].addEventListener('dblclick', function(event){
        event.target.style.color = 'red';
        event.preventDefault(); 
    })

navig[0].addEventListener('mouseout', function(event){
    event.target.style.color = 'black';
})

navig[1].addEventListener('mouseout', function(event){
    event.target.style.color = 'black';
})

// const paraph = document.querySelector('.intro p');
// window.addEventListener('resize',function(event){
//     event.target.style.color = 'red'
// });

const dragImg = document.querySelector('.img-content');
dragImg.addEventListener('drag',function(event){

},false);

dragImg.addEventListener("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
  }, false);

  dragImg.addEventListener("dragend", function(event) {
    // reset the transparency
    event.target.style.opacity = "";
  }, false);
  
  
TweenMax.from('.logo-heading', 2, {scale:2, ease: Bounce.easeOut});
TweenMax.staggerFrom('.nav a', 0.5, {opacity:0, y:200, rotation:360, delay:1},0.2);

  