/* <div class="blocks">
      <div class="block block--red"></div>
      <div class="block block--blue"></div>
      <div class="block block--green"></div>
      <div class="block block--pink"></div>
      <div class="block block--gray"></div>
    </div> */

const block = document.querySelectorAll('.block, .block--red');


TweenMax.to('.blocks, .block--red',4 , {x:'1200'});

TweenMax.to('.blocks, .block--blue',8 , {x:'300'})
var yoyo = myAnimation.yoyo(); //gets current yoyo state

myAnimation.yoyo( true ); //sets yoyo to true