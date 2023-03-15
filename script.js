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

for (let i = 0; i < heroSection.length; i++) {
    // const y = heroSection[i].style.visibility = "visible";
    console.log(heroSection[i])

}
angleLeft.addEventListener('click', function(){
    if (y) {
        y
    }


    
    console.log('This is left.')
})

angleRight.addEventListener('click', function(){
    // for (let i = 0; i < heroSection.length; i++) {
    //     heroSection[i].style.visibility = "visible";
    //     // const element = heroSection[i];
    //     // console.log(element)
    // }
    console.log('This is right.')
})


// fa-angles-right, fa-angles-left
// hero-section hero-section3

