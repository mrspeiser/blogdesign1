$(function(){
 
  var width = $( window ).width();
  var slideWidth = $('.slide').width(width);
  var sliderWidth = $('.slider .slide-container').width();
  var pause = 2000;
  var animationSpeed = 1000;
  var currentSlide = 1;
  
  var $slider = $('.slider');
  var $slideContainer = $slider.find('.slide-container');
  var $slides = $slideContainer.find('.slide');

  setInterval(function(){
    if(width != $( window ).width()){
      var width = $( window ).width();
      var slideWidth = $('.slide').width(width);
      $slideContainer.animate({'margin-left': "-="+width}, animationSpeed, function(){
      currentSlide++; 
        if(currentSlide === $slides.length){
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    }
    
    
  }, pause);

  

});
