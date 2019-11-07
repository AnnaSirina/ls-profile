import Vue from "vue";


new Vue({
    el: '#burger',
    methods: {
        showMobileMenu() {
            alert('test');
            const modal = document.querySelector('.popup');
            modal.classList.add('active')
        }
    }
});

new Vue({
    el: '#closeWindow',
    methods: {
        closeWindow() {
            const modal = document.querySelector('.popup');
            modal.classList.remove('active')
        }
    }
});