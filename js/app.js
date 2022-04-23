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

/*
récupérer toutes les images du carrousel dans un tableau
récupérer la longueur du tableau en paramètre (nombre d'image)
créer x bouton en fonction du nombre d'image 
fonction pour swap à droite
  on fais un transform: translateX(100vw); * le numéro d'index
fonction pour swap à gauche
  on fais un transform: translateX(-100vw); * le numéro d'index
fonction au clic sur un bouton pour afficher l'image qui correspond
fonction qui défile les image 1 par 1 au bout d'un délai
*/
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
    this.drawNavBtn(this.images.length,this.carrouselId);
  },
  carrouselId : carrouselElement.carrousel,
  carrousetContainer : carrouselElement.getFirstChild(),
  images : carrouselElement.getImg(),
  position : 0,
  decalagePosition : 100,
  drawNavBtn(nbrBtn,where){
    let ul = document.createElement('ul');
    ul.className = 'carrousel__nav';
    for (let i = 0; i < nbrBtn-1; i++) {
      let li = document.createElement('li');
      li.className = 'carrousel__link';
      ul.appendChild(li);
    }
    where.appendChild(ul);
  },
  swapLeft(position,nbrSwap){
    if(position < this.images.length){
      let translate = position*(-this.decalagePosition) + nbrSwap*(-this.decalagePosition);
      this.carrousetContainer.style.transform = 'translateX(' + translate + 'vw)';
      position += nbrSwap;
    }
  },
  swapRight(position,nbrSwap){
    if(position > 0){
      let translate = position*(-this.decalagePosition) + nbrSwap*(this.decalagePosition);
      this.carrousetContainer.style.transform = 'translateX(' + translate + 'vw)';
      position += nbrSwap;
    }
  },
};
carrousel.init();