var typed = new Typed('#hero_char', {
    strings: ['Web Developer', 'Designer', 'Programmer', 'Student'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });
  var reveal_items=document.querySelectorAll(".reveal");
    function scroll_reveal() {
        reveal_items.forEach(item => {
            var item_top_height = item.getBoundingClientRect().top;
            var window_top = window.innerHeight;
            if (item_top_height < window_top) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        });
    }
    window.addEventListener('scroll', scroll_reveal);
    scroll_reveal();
    const openbtn=document.querySelector('#openbtn');
    const media= window.matchMedia('(width<900px)');
    const topnavmenu = document.querySelector('.list');
    const main=document.querySelector('main');
    const body =document.querySelector('body');
    function setuptopnav(e) {
        console.log('is mobile',e.matches);
        if (e.matches) {
            console.log('is mobile',e.matches);
            topnavmenu.setAttribute('inert', ''); 
            topnavmenu.style.transition = 'none';
        } else {
            console.log('is not mobile');
            topnavmenu.removeAttribute('inert'); 
            closemenu(); 
        }
    }
    
    function openmenu(){
        openbtn.setAttribute('aria-expanded','true');
        topnavmenu.removeAttribute('inert');
        topnavmenu.removeAttribute('style');
        main.setAttribute('inert','');
        bodyScrollLockUpgrade.disableBodyScroll(body);
        closebtn.focus();
    }
    openbtn.addEventListener('click',openmenu);
    const closebtn =document.querySelector('#closebtn');
    function closemenu(){
        openbtn.setAttribute('aria-expanded','false');
        
        setTimeout(() =>{
            topnavmenu.style.transition='none';
        },1300);
        main.removeAttribute('inert');
        bodyScrollLockUpgrade.enableBodyScroll(body);
        openbtn.focus();
    }
    closebtn.addEventListener('click',closemenu);
   setuptopnav(media);
   media.addEventListener('change',function(e){
    setuptopnav(e);
   });