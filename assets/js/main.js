/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    // tabs.forEach(tab =>{
    //     tab.addEventListener("click",() => {
    //         const target = document.querySelector(tab.dataset.target)

    //         tabContent.forEach(tabContent => {
    //             tabContent.classList.remove("skills__active")
    //         })

    //         target.classList.add('skills__active')

    //         tabs.forEach(tab => {
    //             tab.classList.remove("skills__active")
    //         })

    //         tab.classList.add('skills__active')
    //     })
    // })

    tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.getElementById(tab.dataset.target)

        // Hide all content
        tabContent.forEach(content => {
            content.classList.remove('skills__active')
        })

        // Show selected content
        target.classList.add('skills__active')

        // Remove active tab class from all tabs
        tabs.forEach(t => t.classList.remove('skills__tab-active'))

        // Add to current tab
        tab.classList.add('skills__tab-active')
    })
})


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortofolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(L=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(L=> l.addEventListener("click",activeWork))
/*===== Work Popup =====*/


/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/
