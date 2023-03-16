// Ellipsis one click section
let optionSection = document.getElementById('optionSection')
let ellipsis = document.getElementById('ellipsis');
let remove = document.getElementById('remove')
ellipsis.addEventListener('click', function(){
    optionSection.style.display='block';
    // console.log('This is ellipsis.')
})
remove.addEventListener('click', function(){
    optionSection.style.display='none';
    // console.log('This is remove.')
})
ellipsis.addEventListener('dblclick', function(){
    optionSection.style.display='none';
})



// Angles Left, Right button click handler section

const heroSection = document.getElementsByClassName('hero-section')
const angleLeft = document.getElementsByClassName('fa-angles-left')[0]
const angleRight = document.getElementsByClassName('fa-angles-right')[0]
const dots = document.getElementsByClassName('fa-circle-dot')


for (let i = 0; i < heroSection.length; i++) {

}

let slidIndex = 1;
showSlide(slidIndex)

function showSlide(n){
    if(n> heroSection.length){
        slidIndex = 1
    }
    if(n < 1){
        slidIndex = heroSection.length
    }

    for (let i = 0; i < heroSection.length; i++) {
        const element = heroSection[i];
        element.style.visibility = 'hidden';  
    }
    // slidIndex++
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.className = element.className.replace(' active', '')
        
    }

    heroSection[slidIndex-1].style.visibility = "visible"
    dots[slidIndex-1].className += " active"

}

angleLeft.addEventListener('click', function(){
    showSlide(slidIndex += -1)
    
    console.log('This is left.')
})

angleRight.addEventListener('click', function(){
    showSlide(slidIndex += 1)

    console.log('This is right.')
})


// fa-angles-right, fa-angles-left
// hero-section hero-section3

