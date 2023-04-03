const features = document.getElementById('features')
const navBarFeatures = document.querySelector('.nav-bar-features')
const company = document.getElementById('company')
const navBarCompany = document.querySelector('.nav-bar-company')
const iconMenu = document.querySelector('.icon-menu')
const closeMenu = document.querySelector('.close-menu')
const navBarMobile = document.querySelector('.nav-bar-mobile')
const containerOverplay = document.querySelector('.contaier-overlay')

navBarMobile.querySelector('#features').addEventListener('click', () => {
    navBarMobile.querySelector('.nav-bar-features').classList.toggle('active')
})

navBarMobile.querySelector('#company').addEventListener('click', () => {
    navBarMobile.querySelector('.nav-bar-company').classList.toggle('active')
})

features.addEventListener('click', () => {
    if(navBarFeatures.classList.contains('active')) {
        navBarFeatures.classList.remove('active')
        features.querySelector(".arrow-down").style.display = "block";
        features.querySelector(".arrow-up").style.display = "none";
    } else {
        navBarFeatures.classList.add('active')
        features.querySelector(".arrow-up").style.display = "block";
        features.querySelector(".arrow-down").style.display = "none";
    }
})


company.addEventListener('click', () => {
    if(navBarCompany.classList.contains('active')) {
        navBarCompany.classList.remove('active')
        company.querySelector(".arrow-down").style.display = "block";
        company.querySelector(".arrow-up").style.display = "none";
    } else {
        navBarCompany.classList.add('active')
        company.querySelector(".arrow-up").style.display = "block";
        company.querySelector(".arrow-down").style.display = "none";
    }
})


// xu li click vao menu
iconMenu.addEventListener('click', () => {
    navBarMobile.style.transform = 'translateX(0)'
    containerOverplay.style.display = 'block'
})

// xu li click vao close menu
closeMenu.addEventListener('click', () => {
    navBarMobile.style.transform = ''
    containerOverplay.style.display = 'none'
})