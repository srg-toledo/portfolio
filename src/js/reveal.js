window.revelar = ScrollReveal({ reset: true });

// ALL TITLE
revelar.reveal('.title-section', {
    duration: 2000,
    distance: '15px'
})

// HOME
revelar.reveal('.reveal-box-left-home', {
    duration: 2000,
    distance: '15px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.reveal-img-home', {
    duration: 2000,
    distance: '15px',
    origin: 'right',
})


// SOBRE
revelar.reveal('.reveal-img-sobre', {
    duration: 2000,
    distance: '15px',
    origin: 'left'
})

revelar.reveal('.reveal-box-right-sobre', {
    duration: 2000,
    distance: '15px',
    delay: 500,
    origin: 'right',
})



// SKILLS
revelar.reveal('.reveal-box-right-skills', {
    duration: 2000,
    distance: '15px',
    origin: 'right'
})

revelar.reveal('.reveal-box-left-skills', {
    duration: 2000,
    distance: '15px',
    origin: 'left',
    delay: 500,
})


// CONTATO
revelar.reveal('.reveal-container-form', {
    duration: 2000,
    distance: '15px',
    origin: 'left'
})

revelar.reveal('.reveal-box-right-contato', {
    duration: 2000,
    distance: '15px',
    origin: 'bottom',
    delay: 500,
})

