function scrollTrigger(selector) {
    let element = document.querySelector(selector)
    addObserver(element)
}

function addObserver(element) {
    if (!('IntersectionObserver' in window)) {
        entry.target.classList.add('animated')
        return
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated')
                observer.unobserve(entry.target)
            }
        })
    })
    observer.observe(element)
}

scrollTrigger('.delayed')