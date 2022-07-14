window.addEventListener('scroll', function(){
    const logoImage = document.querySelector('.icon-navbar');
    const mainNav = document.querySelector ('.nav-content');
    const hamburgerIcon = document.querySelector('.mobile-nav-toggle')
    const fontChange = document.querySelectorAll('.link-header')

        if(window.pageYOffset > 600){
            logoImage.style.padding = "0.75rem 0";
            logoImage.style.width = "6rem";
            logoImage.style.aspectRatio = "0.75";  
            hamburgerIcon.style.width = "2.75rem";
            mainNav.style.minHeight = "10vh";
            mainNav.classList.add('bg-transition');
            for (let elem of fontChange) {
                elem.style.fontSize = 'clamp(1rem, 1rem + 1.5vw, 2rem)'
            }
        }else{
            logoImage.style.padding = "0";
            logoImage.style.width = "8rem";   
            logoImage.style.aspectRatio = "1";   
            hamburgerIcon.style.width = "3rem";            
            // mainNav.style.minHeight = "10rem";
            mainNav.classList.remove('bg-transition');
            for (let elem of fontChange) {
                elem.style.fontSize= 'clamp(1rem, 1rem + 1.85vw, 2.5rem)'
            }
        } 
})
