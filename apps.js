const carouselSlide = document.querySelector('.int-slide');
const carouselImages= document.querySelectorAll('.int-slide span');

//Buttons
const prevBtn=document.querySelector('#prevBtn');
const nextBtn=document.querySelector('#nextBtn');

//Counter
let counter=1;
const size=carouselImages[0].clientWidth;
carouselSlide.style.transform ='translateX('+(-size*counter)+'px)';

//Button Listeners
nextBtn.addEventListener('click',()=>{
  carouselSlide.style.transition="transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform='translateX('+(-size*counter)+'px)';
});

prevBtn.addEventListener('click',()=>{
  carouselSlide.style.transition="transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform='translateX('+(-size*counter)+'px)';
})

carouselSlide.addEventListener('transitionend',()=>{
  if(carouselImages[counter].id ==='lastClone'){
    carouselSlide.style.transition="none";
    counter= carouselImages.length-5;
    carouselSlide.style.transform='translateX('+(-size*counter)+'px)';
  }
  if(carouselImages[counter].id ==='firstClone'){
    carouselSlide.style.transition="none";
    counter= carouselImages.length-counter-1;
    carouselSlide.style.transform='translateX('+(-size*counter)+'px)';
  }
})
