'use strict';

$(document).ready(function(){
  $('.slick-carousel').slick({
    dots:true,
    arrows:false,
    pauseOnFocus:false,
    autoplay:true,
    autoplaySpeed:3000,    
  });
});


var legal = {
  init(){
    this.popup(this.mentionLegal,this.mentionId);
    this.popup(this.politique,this.politiqueId);
  },
  politique : document.getElementById('politique-confidence'),
  mentionLegal : document.getElementById('mention-legal'),
  bodyClass : document.getElementById('body'),
  mentionId : document.getElementById('mention'),
  politiqueId : document.getElementById('politique'),
  close : document.querySelectorAll('.close'),
  hidePopup(display){
    legal.bodyClass.classList.add('hide-display');
    display.classList.remove('hide-display');
  },
  closePopup(display){
    legal.bodyClass.classList.remove('hide-display');
    display.classList.add('hide-display');
  },
  popup(btn,display){
    btn.addEventListener('click',function(){
      legal.hidePopup(display);
    });
    display.addEventListener('click',function(e){
      if(e.path[0] === display){
        legal.closePopup(display);
      }
    });
    for (let i = 0; i < legal.close.length; i++) {
      legal.close[i].addEventListener('click',function(){
        legal.closePopup(display);
      });
    }
  },
};
legal.init();