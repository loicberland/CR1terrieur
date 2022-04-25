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
    this.width = this.makeSizeContainer(this.carrousetContainer);
    this.createArray(this.decalageImages,this.images.length);
    this.moveSwapArrow();
    // this.makePosition(this.images);
    this.btn=this.drawNavBtn(this.images.length,this.carrouselId);    
    // carrousel.btnActive(carrousel.position);
    // this.moveSwapBtn();    
    // setInterval(() => {
    //   this.SwapAuto();
    // }, carrousel.delayAutoSwap);    
  },
  carrouselId : carrouselElement.carrousel,
  carrousetContainer : carrouselElement.getFirstChild(),
  images : carrouselElement.getImg(),
  btn : '',
  position : 0,
  decalagePosition : 100,
  delayAutoSwap : 2000,
  width : 0,
  decalageImages : [],
  makeSizeContainer(container){
    container.style.width = carrousel.images.length * carrousel.decalagePosition + 'vw';
    return(carrousel.images.length * carrousel.decalagePosition);
  },
  createArray(array,size,initValue =0){
    for (let i = 0; i < size; i++) {
      array.push(initValue);
    }
  },
  // makePosition(images){
  //   for (let i = 0; i < images.length; i++) {
  //     if(i===images.length-1){
  //       images[i].style.transform = 'translateX(-' + carrousel.width + 'vw)';
  //     }
  //   }
  // },
  drawNavBtn(nbrBtn,where){
    let ul = document.createElement('ul');
    ul.className = 'carrousel__nav';
    for (let i = 0; i < nbrBtn; i++) {
      let li = document.createElement('li');
      li.className = 'carrousel__link';
      if(i === carrousel.position){
        li.classList.add('carrousel__active');
      }
      ul.appendChild(li);
    }
    where.appendChild(ul);
    return(ul);
  },
  moveSwapArrow(){
    document.addEventListener('keyup',function(e){
      if (e.key === 'ArrowLeft'){
        carrousel.swapLeft(carrousel.images,2);
      }else if(e.key === 'ArrowRight'){
        carrousel.swapRight(carrousel.images,2);
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
    if(carrousel.position===carrousel.images.length-1){
      carrousel.position = carrousel.swapLeft(position,carrousel.images.length-1);
    }else{
      carrousel.position = carrousel.swapRight(position,1);
    }
    carrousel.btnActive(carrousel.position);
  },
  swapRight(images,nbrSwap){
    for (let i = 0; i < images.length; i++) {
      let min = (i+1) * (-carrousel.decalagePosition);
      let max = ((images.length-2) * carrousel.decalagePosition) - (i * carrousel.decalagePosition);
      if(carrousel.decalageImages[i] - (nbrSwap*carrousel.decalagePosition) < min){
        carrousel.decalageImages[i] = max - ((nbrSwap*carrousel.decalagePosition)-(carrousel.decalageImages[i]-min)-100);
        images[i].style.transform = 'translateX(' + carrousel.decalageImages[i] + 'vw)';
      }else{        
        carrousel.decalageImages[i]-= nbrSwap*carrousel.decalagePosition;
        images[i].style.transform = 'translateX(' + carrousel.decalageImages[i] + 'vw)';
      }
    }
    if(carrousel.position + nbrSwap > images.length-1){
      carrousel.position=carrousel.position-(images.length-1) + (nbrSwap-1);
    }else{
      carrousel.position+=nbrSwap;
    }
  },
  swapLeft(images,nbrSwap){
    for (let i = 0; i < images.length; i++) {
      let min = (i+1) * (-carrousel.decalagePosition);
      let max = ((images.length-2) * carrousel.decalagePosition) - (i * carrousel.decalagePosition);
      if(i===images.length-1 && carrousel.decalageImages[0] === 100){
        carrousel.decalageImages[i] = min;
        images[i].style.transform = 'translateX(' + carrousel.decalageImages[i] + 'vw)';
      }
      if(carrousel.decalageImages[i] +(nbrSwap*carrousel.decalagePosition) > max){
        //calcul pas encore bon pour le left multi swap
        carrousel.decalageImages[i] = min - ((nbrSwap*carrousel.decalagePosition)-(max - carrousel.decalageImages[i])-100);
        images[i].style.transform = 'translateX(' + carrousel.decalageImages[i] + 'vw)';
      }else{        
        carrousel.decalageImages[i]+= carrousel.decalagePosition;
        images[i].style.transform = 'translateX(' + carrousel.decalageImages[i] + 'vw)';
      }
    }
    if(carrousel.position - nbrSwap < 0){
      carrousel.position=carrousel.position+images.length-1 - (nbrSwap-1);
    }else{
      carrousel.position-=nbrSwap;
    }
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