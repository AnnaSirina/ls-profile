import Vue from "vue";


new Vue({
    el: '#burger',
    methods: {
        showMobileMenu() {
            const modal = document.querySelector('.popup');
            modal.classList.add('active')
        }
    }
});

new Vue({
    el: '#close',
    methods: {
        closeWindow() {
            const close = document.querySelector('.popup');
            close.classList.remove('active')
        }
    }
});