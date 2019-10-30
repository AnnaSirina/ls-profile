$(document).on('page:load', function () {
    new Flickity('slider');
    setTimeout(function () {
        // both instances now initialized.
    }, 20)
});


$(document).ready(function () {

    // ----------------------------------------------

    // define slider component
    var items = [{
        name: 'Дмитрий Ковальчук',
        img: "./images/content/dmitriy.jpg",
        content: 'Эта девушка проходила обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей.',
        title: 'Основатель школы'
    }, {
        name: 'Владимир Собанцев',
        img: "./images/content/vladimir.jpg",
        content: 'Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на очень старых браузерах.',
        title: 'Преподаватель'
    }]

    // boot up
    new Vue({
        el: '#slider',
        data: {
            items: items
        }
    });

    $('.slider').flickity({
        draggable: true,
        friction: 0.2,
        wrapAround: true,
        lazyLoad: 3,
        contain: true,
        pageDots: false,
        prevNextButtons: true,
        arrowShape: {
            x0: 20,
            x1: 55,
            y1: 35,
            x2: 60,
            y2: 30,
            x3: 30
        },
        imagesLoaded: true,

    });
});