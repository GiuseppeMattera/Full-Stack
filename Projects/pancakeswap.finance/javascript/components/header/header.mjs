export const header = () => {

document.addEventListener('DOMContentLoaded', () => {
    //ANCHOR - swipper
    const spans = document.querySelectorAll('.z-6 span');
    const containerSpan = document.getElementById('span_container')
    spans[0].classList.add('active');
    let timer;

    const cleanSpan = () => {
        spans.forEach((otherSpan) => {
            otherSpan.classList.add('opacity-50');
            otherSpan.classList.remove('active');

        });

    }

    const cleanSwipper = () => {
        const allSwipper = document.querySelectorAll('.swipper')
        allSwipper.forEach((swipper) => {
            swipper.classList.add('hidden')
        })
    }

    const setSwiperInterval = () => {
        timer = setInterval(() => {

            const activeElement = containerSpan.querySelector('.active');

            const nextElement = activeElement.nextElementSibling;
            const firstElement = spans[0];
            const idSwipper = nextElement ? nextElement.getAttribute('reference') : firstElement.getAttribute('reference');
            const swipperSelected = document.getElementById(idSwipper);
            cleanSwipper()

            swipperSelected.classList.remove('hidden')

            if (nextElement) {
                cleanSpan()

                nextElement.classList.remove('opacity-50');
                nextElement.classList.add('active');
            } else {
                cleanSpan()
                firstElement.classList.remove('opacity-50');
                firstElement.classList.add('active');
            }



        }, 10000);
    }
    const clearSwipperInteval = () => {
        clearInterval(timer)
    }

    containerSpan.addEventListener('click', function (event) {
        const element = event.target
        const idSwipper = element.getAttribute('reference');

        cleanSpan()
        element.classList.remove('opacity-50')
        element.classList.add('active')

        const swipperSelected = document.getElementById(idSwipper)
        cleanSwipper()

        swipperSelected.classList.remove('hidden');
        clearSwipperInteval();
        setSwiperInterval();
    })

    setSwiperInterval()




    //ANCHOR - countdown

    const cdContainer = document.querySelector('#cd_container')
    const days = cdContainer.querySelector('#days')
    const hour = cdContainer.querySelector('#hour')
    const minutes = cdContainer.querySelector('#minutes')
    const seconds = cdContainer.querySelector('#seconds')
    let distance = 0;

    const cdTiming = () => {
        const countDownDate = new Date("Mar 30, 2024 15:37:25").getTime();
        const now = new Date().getTime();

        distance = countDownDate - now;

        const daysTime = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hoursTime = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesTime = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondsTime = Math.floor((distance % (1000 * 60)) / 1000);

        days.innerHTML = daysTime
        hour.innerHTML = hoursTime
        minutes.innerHTML = minutesTime
        seconds.innerHTML = secondsTime
    }




    cdTiming()


    const x = setInterval(function () {

        cdTiming()

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);


    //button for style mode
    // const btnToggle = document.getElementById('toggleMode');
    // const svgLight = document.getElementById('svgLight');
    // const svgDark = document.getElementById('svgDark');
    // const svgArrowLight = document.getElementById('svgArrowLight');
    // const svgArrowDark = document.getElementById('svgArrowDark');
    // const ligthCarousel = document.getElementById('ligthCarousel')
    // const darkCarousel = document.getElementById('darkCarousel')
    // const ligthCarousel2 = document.getElementById('ligthCarousel2')
    // const darkCarousel2 = document.getElementById('darkCarousel2')


    // btnToggle.addEventListener('click', function () {
    //     document.body.classList.toggle('dark')
    //     const activeDarkModeEmilio = document.body.classList.contains('dark')
    //     if (activeDarkModeEmilio) {
    //         btnToggle.innerText = 'Light Mode'
    //         svgLight.classList.toggle('hidden')
    //         svgDark.classList.toggle('hidden')
    //         svgArrowLight.classList.toggle('hidden')
    //         svgArrowDark.classList.toggle('hidden')
    //         ligthCarousel.classList.toggle('hidden')
    //         darkCarousel.classList.toggle('hidden')
    //         ligthCarousel2.classList.toggle('hidden')
    //         darkCarousel2.classList.toggle('hidden')
    //     } else {
    //         btnToggle.innerText = 'Dark Mode'
    //         svgLight.classList.toggle('hidden')
    //         svgDark.classList.toggle('hidden')
    //         svgArrowLight.classList.toggle('hidden')
    //         svgArrowDark.classList.toggle('hidden')
    //         ligthCarousel.classList.toggle('hidden')
    //         darkCarousel.classList.toggle('hidden')
    //         ligthCarousel2.classList.toggle('hidden')
    //         darkCarousel2.classList.toggle('hidden')
    //     }
    // })
});
}
