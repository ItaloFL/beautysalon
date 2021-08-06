const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')

for (const element of toggle){
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}


for (const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}


function changeHeaderWhenScroll() {
  
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if(this.window.scrollY >= navHeight){
    header.classList.add('scroll')
  }else{
    header.classList.remove('scroll')
  }
}





const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .title, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)



function  backToTheTop() {
  const backToTheTopButton = document.querySelector('.back-to-top')

  if(this.window.scrollY >= 560){
    backToTheTopButton.classList.add('show')
  } else{
    backToTheTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTheTop()
})