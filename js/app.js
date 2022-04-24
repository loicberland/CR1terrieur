'use strict';

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

var carrouselElement = {
  carrousel : document.getElementById('main-carrousel'),
  getFirstChild(){
    return this.carrousel.firstElementChild;
  },
  getImg(){
    return this.carrousel.querySelectorAll('.carrousel__img');
  },
};

var carrousel = {
  init(){
    this.btn=this.drawNavBtn(this.images.length,this.carrouselId);
    carrousel.btnActive(carrousel.position);
    this.moveSwapBtn();    
    setInterval(() => {
      this.SwapAuto();
    }, carrousel.delayAutoSwap);    
  },
  carrouselId : carrouselElement.carrousel,
  carrousetContainer : carrouselElement.getFirstChild(),
  images : carrouselElement.getImg(),
  btn : '',
  position : 0,
  decalagePosition : 100,
  delayAutoSwap : 2000,
  drawNavBtn(nbrBtn,where){
    let ul = document.createElement('ul');
    ul.className = 'carrousel__nav';
    for (let i = 0; i < nbrBtn; i++) {
      let li = document.createElement('li');
      li.className = 'carrousel__link';
      ul.appendChild(li);
    }
    where.appendChild(ul);
    return(ul);
  },
  moveSwapArrow(){
    document.addEventListener('keyup',function(e){
      if (e.key === 'ArrowLeft'){
        carrousel.position = carrousel.swapLeft(carrousel.position,1);
      }else if(e.key === 'ArrowRight'){
        carrousel.position = carrousel.swapRight(carrousel.position,1);
      }
      carrousel.btnActive(carrousel.position);
    });    
  },
  moveSwapBtn(){
    let li = carrousel.btn.querySelectorAll('.carrousel__link');
    for (let i = 0; i < li.length; i++) {
      li[i].addEventListener('click',function(){
        let dec = Math.abs(carrousel.position - i);
        if (i < carrousel.position){
          carrousel.position = carrousel.swapLeft(carrousel.position,dec);
        }else if(i > carrousel.position){
          carrousel.position = carrousel.swapRight(carrousel.position,dec);
        }
        carrousel.btnActive(carrousel.position);
      });    
    }
  },
  SwapAuto(){
    let position = carrousel.position;
    if(carrousel.position===carrousel.images.length){
      // position = 0;
      carrousel.position = carrousel.swapLeft(0,carrousel.images.length);
      console.log('left : ' + carrousel.images.length);
    }else{
      // position++;
      carrousel.position = carrousel.swapRight(position,1);
      console.log('right : ' + position);
    }
    console.log(carrousel.images.length);
    // carrousel.position = position;
  },
  swapLeft(position,nbrSwap){
    if(position > 0){
      let translate = position*(-this.decalagePosition) + nbrSwap*(this.decalagePosition);
      this.carrousetContainer.style.transform = 'translateX(' + (translate) + 'vw)';
      position -= nbrSwap;
    }
    return position;
  },
  swapRight(position,nbrSwap){
    if(position < this.images.length-1){
      let translate = position*(-this.decalagePosition) + nbrSwap*(-this.decalagePosition);
      this.carrousetContainer.style.transform = 'translateX(' + (translate) + 'vw)';
      position += nbrSwap;
    }
    return position;
  },
  btnActive(position){
    let li = carrousel.btn.querySelectorAll('.carrousel__link');
    for (let i = 0; i < li.length; i++) {
      if(i===position){
        if (!li[i].classList.contains('carrousel__active')) {
          li[i].classList.add('carrousel__active');
        }
      }else if(li[i].classList.contains('carrousel__active')){
        li[i].classList.remove('carrousel__active');
      }
    }
  },
};
carrousel.init();