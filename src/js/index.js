const carouselBtn = document.querySelectorAll(".btn")

carouselBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        const selectedBtn = document.querySelector('.selected')
        const imgs = document.querySelectorAll('.img')
        
        selectedBtn.classList.remove('selected')

        btn.classList.add('selected')

        const activeImg = document.querySelector('.active')

        activeImg.classList.remove('active')

        imgs[i].classList.add('active')
    })
})
