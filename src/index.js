var apComponentButtonActive = document.querySelector('.ap-component__button-content--active');
var apComponentButtonDefault = document.querySelector('.ap-component__button-content--default');
var apComponentButtonBackground= document.querySelector('.ap-component__button--background');

let shareButton = document.querySelector('.ap-component__button-share');
let shareButtonSVG = document.querySelector('.svg-arrow');
let shareButtonBoolean = false;

console.log(shareButton)
/* console.dir(shareButton); */

shareButton.addEventListener('click', function() {
    if(!shareButtonBoolean) {
    
    apComponentButtonDefault.style.zIndex = 3;
    apComponentButtonDefault.style.opacity = 0;
    apComponentButtonDefault.style.transition = 'opacity 400ms';

    apComponentButtonActive.style.opacity = 1;
    apComponentButtonActive.style.zIndex = 4;

    apComponentButtonBackground.style.backgroundColor = '#48556A';
    apComponentButtonBackground.style.width = '100%';
/*     apComponentButtonBackgroundLeft.style.width = '84%';
    apComponentButtonBackgroundLeft.style.left = '35%'; */

/*     shareButton.style.animation = 'buttonMovement 1s'; */
    shareButton.style.transform = 'rotate(360deg)';
    shareButton.style.backgroundColor = '#6D7F97';

    shareButtonSVG.style.fill = '#ffffff';
    shareButtonBoolean = true;
    console.log(shareButton)
    }
    else {

    apComponentButtonDefault.style.zIndex = 4;
    apComponentButtonDefault.style.opacity = 1;
    apComponentButtonDefault.style.transition = 'opacity 800ms 400ms';

    apComponentButtonActive.style.opacity = 0;
    apComponentButtonActive.style.zIndex = 3;

    apComponentButtonBackground.style.backgroundColor = '#48556A';
    apComponentButtonBackground.style.width = '0';

/*     shareButton.style.animation = 'buttonMovement 1s'; */
    shareButton.style.transform = 'rotate(0deg)'
    shareButton.style.backgroundColor = '#ECF2F8';
    
    shareButtonSVG.style.fill = '#48556A';
    shareButtonBoolean = false;
    }
    setTimeout(() => {
        
    },1000);
});