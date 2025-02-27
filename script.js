new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        }
    }
  });

// Add and Remove Active Class
const spiritItems = document.querySelectorAll('.spirit-items a')
spiritItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        spiritItems.forEach(i => i.classList.remove('active'))
        this.classList.add('active')
    })
})